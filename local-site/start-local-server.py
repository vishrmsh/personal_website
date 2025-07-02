#!/usr/bin/env python3
"""
Simple local development server for the portfolio website.
Works completely offline without any external dependencies.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def main():
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 Starting local development server...")
            print(f"📁 Serving files from: {script_dir}")
            print(f"🌐 Server running at: http://localhost:{PORT}")
            print(f"📱 Your website is at: http://localhost:{PORT}/index.html")
            print(f"\n✨ Opening in browser...")
            print(f"👉 Press Ctrl+C to stop the server")
            
            # Try to open in default browser
            try:
                webbrowser.open(f'http://localhost:{PORT}/index.html')
            except Exception as e:
                print(f"⚠️  Could not open browser automatically: {e}")
                print(f"🔗 Please open http://localhost:{PORT}/index.html manually")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n👋 Server stopped!")
        sys.exit(0)
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try closing other applications or use a different port")
            print(f"🔧 You can also try: python -m http.server {PORT + 1}")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 