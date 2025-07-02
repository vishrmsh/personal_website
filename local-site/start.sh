#!/bin/bash

echo "🌐 Starting local development server for your portfolio..."
echo "📁 This will run your website locally without needing Wix or internet"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 start-local-server.py
elif command -v python &> /dev/null; then
    python start-local-server.py
else
    echo "❌ Python not found!"
    echo "💡 Please install Python 3 from https://python.org"
    echo "🔧 Or try: python -m http.server 8000"
    exit 1
fi 