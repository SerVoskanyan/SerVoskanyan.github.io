#!/bin/bash
cd "$(dirname "$0")"
echo "Portfolio v2 → http://localhost:8080"
python3 -m http.server 8080
