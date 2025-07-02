#!/bin/bash

# Auto-commit and push script for vishrmsh personal portfolio
# Usage: ./push-changes.sh [commit message]

set -e

echo "🚀 Auto-committing and pushing changes..."

# Add all changes
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
    exit 0
fi

# Get commit message from argument or use default
if [ -n "$1" ]; then
    COMMIT_MSG="$1"
else
    COMMIT_MSG="Auto-update: $(date '+%Y-%m-%d %H:%M')"
fi

# Commit changes
echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Push to main branch
echo "⬆️  Pushing to GitHub..."
git push origin main

echo "✅ Successfully pushed changes to GitHub!" 