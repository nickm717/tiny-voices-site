#!/usr/bin/env python3
"""Stamp each local CSS/JS link in the HTML pages with a hash of the file's contents.

Run after changing anything in assets/:  python3 tools/version-assets.py
Browsers then fetch the new file instead of a cached copy.
"""
import hashlib, pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
pattern = re.compile(r'((?:href|src)=")(assets/[\w.-]+\.(?:css|js))(?:\?v=[0-9a-f]+)?(")')

def stamp(m):
    digest = hashlib.sha256((root / m.group(2)).read_bytes()).hexdigest()[:10]
    return f"{m.group(1)}{m.group(2)}?v={digest}{m.group(3)}"

for page in sorted(root.glob("*.html")):
    text = page.read_text()
    new = pattern.sub(stamp, text)
    if new != text:
        page.write_text(new)
        print(f"stamped {page.name}")
