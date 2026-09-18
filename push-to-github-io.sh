#!/bin/bash
set -euo pipefail

REMOTE="git@github.com:SerVoskanyan/SerVoskanyan.github.io.git"

echo "Checking repo SerVoskanyan.github.io..."
if ! git ls-remote "$REMOTE" HEAD >/dev/null 2>&1; then
  echo "Repo not found. Create it first:"
  echo "https://github.com/new?name=SerVoskanyan.github.io&visibility=public"
  exit 1
fi

git push -u origin main
echo "Done. Enable Pages: Settings → Pages → branch main → / (root)"
echo "URL: https://servoskanyan.github.io/"
