#!/usr/bin/env bash
# One-command Vercel deploy.
set -euo pipefail
npm run build
vercel --prod
