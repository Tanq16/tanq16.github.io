#!/usr/bin/env python3
"""Static blog generator for tanishq.page (standard library only).

Source of truth is each blog/posts/<slug>/markdown.md, which carries a small
frontmatter block followed by the article body. Running this script rebuilds,
from those files:

  - blog/posts.json               index consumed by the listing + post pages
  - blog/posts/<slug>/index.html  per-post SEO shell, from templates/post.html
  - sitemap.xml

Usage:
  python3 blog/generate.py             rebuild posts.json, all shells, sitemap
  python3 blog/generate.py new <slug>  scaffold blog/posts/<slug>/markdown.md
"""
import json
import os
import re
import sys
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POSTS_DIR = os.path.join(ROOT, "blog", "posts")
TEMPLATE = os.path.join(ROOT, "blog", "templates", "post.html")
POSTS_JSON = os.path.join(ROOT, "blog", "posts.json")
SITEMAP = os.path.join(ROOT, "sitemap.xml")

SITE = "https://tanishq.page"
AUTHOR = "Tanishq Rupaal"
WPM = 180
STATIC_URLS = ["/", "/blog/", "/resume/"]


def parse_frontmatter(text):
    if not text.startswith("---"):
        raise ValueError("missing frontmatter fence")
    lines = text.split("\n")
    end = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), None)
    if end is None:
        raise ValueError("unterminated frontmatter")
    meta = {}
    for line in lines[1:end]:
        if not line.strip():
            continue
        key, _, val = line.partition(":")
        key, val = key.strip(), val.strip()
        if key == "tags":
            val = val.strip("[]").strip()
            meta["tags"] = [t.strip() for t in val.split(",") if t.strip()] if val else []
        else:
            if len(val) >= 2 and val[0] == val[-1] and val[0] in "\"'":
                val = val[1:-1]
            meta[key] = val
    return meta, "\n".join(lines[end + 1:]).lstrip("\n")


def esc_attr(s):
    """Neutralize the double-quote so a value is safe inside a double-quoted
    HTML attribute; existing entities (e.g. &rarr;) are left intact."""
    return s.replace('"', "&quot;")


def derive_description(body):
    for para in re.split(r"\n\s*\n", body):
        p = para.strip()
        if not p or p.startswith("#") or p.startswith("```") or p.startswith("|"):
            continue
        p = re.sub(r"^[>\-\*\s]+", "", p)
        p = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", p)
        p = re.sub(r"[*_`#]+", "", p)
        p = " ".join(p.split())
        if p:
            return p[:152].rstrip() + "..." if len(p) > 155 else p
    return ""


def read_time(body):
    return max(1, round(len(body.split()) / WPM))


def load_posts():
    posts = []
    for slug in sorted(os.listdir(POSTS_DIR)):
        md = os.path.join(POSTS_DIR, slug, "markdown.md")
        if slug == "template" or not os.path.isfile(md):
            continue
        meta, body = parse_frontmatter(open(md, encoding="utf-8").read())
        dt = datetime.strptime(meta["date"], "%Y-%m-%d")
        posts.append({
            "slug": slug,
            "title": meta["title"],
            "description": meta.get("description") or derive_description(body),
            "date_iso": meta["date"],
            "date_display": dt.strftime("%b %d, %Y"),
            "dt": dt,
            "readTime": f"{read_time(body)} min read",
            "category": meta.get("category", ""),
            "tags": meta.get("tags", []),
            "image": meta.get("image", ""),
        })
    posts.sort(key=lambda p: (p["dt"], p["slug"]), reverse=True)
    return posts


def dump_posts_json(posts):
    j = lambda s: json.dumps(s, ensure_ascii=False)
    blocks = []
    for p in posts:
        tags = ", ".join(j(t) for t in p["tags"])
        blocks.append(
            "    {\n"
            f"        \"id\": {j(p['slug'])},\n"
            f"        \"title\": {j(p['title'])},\n"
            f"        \"description\": {j(p['description'])},\n"
            f"        \"date\": {j(p['date_display'])},\n"
            f"        \"readTime\": {j(p['readTime'])},\n"
            f"        \"category\": {j(p['category'])},\n"
            f"        \"location\": {j(p['slug'])},\n"
            f"        \"tags\": [{tags}],\n"
            f"        \"image\": {j(p['image'])}\n"
            "    }"
        )
    return "[\n" + ",\n".join(blocks) + "\n]\n"


def render_post_html(template, p):
    repl = {
        "{{TITLE}}": esc_attr(p["title"]),
        "{{DESCRIPTION}}": esc_attr(p["description"]),
        "{{URL}}": f"{SITE}/blog/posts/{p['slug']}/",
        "{{IMAGE_URL}}": f"{SITE}/blog/images/{p['image']}",
        "{{DATE_ISO}}": p["date_iso"],
    }
    out = template
    for k, v in repl.items():
        out = out.replace(k, v)
    return out


def render_sitemap(posts):
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    lines += [f"    <url><loc>{SITE}{u}</loc></url>" for u in STATIC_URLS]
    lines += [f'    <url><loc>{SITE}/blog/posts/{p["slug"]}/</loc><lastmod>{p["date_iso"]}</lastmod></url>'
              for p in posts]
    lines.append("</urlset>")
    return "\n".join(lines) + "\n"


def build():
    template = open(TEMPLATE, encoding="utf-8").read()
    posts = load_posts()
    open(POSTS_JSON, "w", encoding="utf-8").write(dump_posts_json(posts))
    for p in posts:
        open(os.path.join(POSTS_DIR, p["slug"], "index.html"), "w", encoding="utf-8").write(
            render_post_html(template, p))
    open(SITEMAP, "w", encoding="utf-8").write(render_sitemap(posts))
    print(f"Built posts.json + {len(posts)} shells + sitemap.xml")


NEW_STUB = """---
title: {slug}
date: {date}
category:
tags: []
image:
description:
---

Write the post here. Metadata above is the single source of truth; leave
`description` blank to auto-derive it from the first paragraph. Then run
`python3 blog/generate.py` to rebuild posts.json, this post's index.html, and
the sitemap.
"""


def new_post(slug):
    folder = os.path.join(POSTS_DIR, slug)
    if os.path.exists(folder):
        sys.exit(f"error: {folder} already exists")
    os.makedirs(folder)
    md = os.path.join(folder, "markdown.md")
    open(md, "w", encoding="utf-8").write(
        NEW_STUB.format(slug=slug, date=datetime.now().strftime("%Y-%m-%d")))
    print(f"Created {md}\nAdd a cover image to blog/images/, write the post, then run: python3 blog/generate.py")


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "new":
        if len(args) < 2:
            sys.exit("usage: python3 blog/generate.py new <slug>")
        new_post(args[1])
    else:
        build()
