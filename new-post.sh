#!/usr/bin/env bash
set -euo pipefail

usage() {
    echo "Usage: $0 <slug> <title> <date> <readTime> <category> <image> <description> <tags...>"
    echo ""
    echo "Example:"
    echo "  $0 my-post \"My Post Title\" \"Jan 01, 2025\" \"5 min read\" \"Computers and Security\" \"my-cover.jpeg\" \"A description of my post\" tag1 tag2 tag3"
    exit 1
}

if [ $# -lt 8 ]; then
    usage
fi

SLUG="$1"
TITLE="$2"
DATE="$3"
READ_TIME="$4"
CATEGORY="$5"
IMAGE="$6"
DESCRIPTION="$7"
shift 7
TAGS=("$@")

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
POST_DIR="$SCRIPT_DIR/blog/posts/$SLUG"
POSTS_JSON="$SCRIPT_DIR/blog/posts.json"
TEMPLATE_SRC="$SCRIPT_DIR/blog/posts/template/index.html"

# 1. Create post directory
if [ -d "$POST_DIR" ]; then
    echo "Error: Directory $POST_DIR already exists."
    exit 1
fi
mkdir -p "$POST_DIR"
echo "Created $POST_DIR"

# 2. Copy universal template
cp "$TEMPLATE_SRC" "$POST_DIR/index.html"
echo "Copied template index.html"

# 3. Create empty markdown file
touch "$POST_DIR/markdown.md"
echo "Created empty markdown.md"

# 4. Add entry to posts.json
TAGS_JSON=$(printf '%s\n' "${TAGS[@]}" | python3 -c "import sys,json; print(json.dumps([l.strip() for l in sys.stdin]))")

python3 -c "
import json, sys

with open('$POSTS_JSON', 'r') as f:
    posts = json.load(f)

new_post = {
    'id': '$SLUG',
    'title': '''$TITLE''',
    'description': '''$DESCRIPTION''',
    'date': '$DATE',
    'readTime': '$READ_TIME',
    'category': '$CATEGORY',
    'location': '$SLUG',
    'tags': $TAGS_JSON,
    'image': '$IMAGE'
}

posts.append(new_post)

with open('$POSTS_JSON', 'w') as f:
    json.dump(posts, f, indent=4, ensure_ascii=False)
    f.write('\n')
"
echo "Added entry to posts.json"

# 5. Regenerate sitemap.xml
python3 -c "
import json

with open('$POSTS_JSON', 'r') as f:
    posts = json.load(f)

lines = ['<?xml version=\"1.0\" encoding=\"UTF-8\"?>']
lines.append('<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">')

for url in ['https://tanishq.page/', 'https://tanishq.page/blog/', 'https://tanishq.page/resume/']:
    lines.append(f'    <url><loc>{url}</loc></url>')

for p in posts:
    lines.append(f'    <url><loc>https://tanishq.page/blog/posts/{p[\"location\"]}/</loc></url>')

lines.append('</urlset>')

with open('$SCRIPT_DIR/sitemap.xml', 'w') as f:
    f.write('\n'.join(lines) + '\n')
"
echo "Regenerated sitemap.xml"

echo ""
echo "Done! New post created at: blog/posts/$SLUG/"
echo "Next steps:"
echo "  1. Add cover image to blog/images/$IMAGE"
echo "  2. Write content in blog/posts/$SLUG/markdown.md"
