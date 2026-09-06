# Blog

Posts are plain Markdown with a small frontmatter block. `generate.py` derives
everything else (the post list, each post's HTML shell, and the sitemap) so
none of those are edited by hand.

## Layout

```
blog/
  generate.py            build script (Python stdlib, no dependencies)
  templates/post.html    the one HTML shell, with {{PLACEHOLDERS}}
  posts.json             GENERATED, do not edit
  posts/<slug>/
    markdown.md          frontmatter + article  ← the only thing you write
    index.html           GENERATED, do not edit
sitemap.xml              GENERATED, do not edit
```

## Add a post

```bash
python3 blog/generate.py new my-slug      # scaffolds blog/posts/my-slug/markdown.md
# add a cover image to blog/images/, then write the post
python3 blog/generate.py                  # rebuild posts.json, shells, sitemap.xml
```

## Frontmatter

```markdown
---
title: The Way to Go(lang)
date: 2024-12-14
category: Computers and Security
tags: [programming, go, scripting]
image: go-cover.jpg
description: Why Go became my default for tooling.
---

## Body starts here
```

- `date` is ISO `YYYY-MM-DD`; the pretty form shown on the site is derived from it.
- `image` is a filename under `blog/images/`; leave it blank and the post renders with no cover.
- `description` is optional; leave it blank to auto-derive from the first
  paragraph. It feeds the card, the meta description, and social share tags.
- Reading time is computed from the word count (~180 wpm); there is no field for it.

Run `python3 blog/generate.py` after any edit and commit the regenerated files.
