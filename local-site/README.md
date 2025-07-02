# Local Portfolio Website

This is a standalone, offline version of your portfolio website that works without any connection to Wix or external services.

## Quick Start

### Option 1: Using the Python Server (Recommended)
```bash
cd local-site
python3 start-local-server.py
```

### Option 2: Using the Shell Script
```bash
cd local-site
chmod +x start.sh
./start.sh
```

### Option 3: Manual Server
```bash
cd local-site
python -m http.server 8000
```

Then open: http://localhost:8000/index.html

## What This Includes

✅ **Complete Portfolio Content**
- All your professional information
- Links to Vy Labs AI, Google Scholar, etc.
- Contact information and social links
- Beautiful, responsive design

✅ **Works Offline**
- No internet connection required
- No Wix dependencies
- Runs entirely on your local machine

✅ **Modern Design**
- Professional styling with animations
- Mobile-responsive layout
- Smooth hover effects and transitions

## Features

- **Professional Profile**: Your photo, title, and tagline
- **Current Leadership**: Vy Labs AI information
- **Experience**: Recent work and company history
- **Education**: PhD details with dissertation highlight
- **Links**: All your professional and social links
- **Contact**: Direct email and professional contact info

## Technical Details

- Pure HTML/CSS/JavaScript
- No external dependencies
- Works in any modern browser
- Responsive design for mobile and desktop
- Uses Python's built-in HTTP server

## Troubleshooting

**Port already in use?**
- Change the port in `start-local-server.py` (line 16)
- Or try: `python -m http.server 8001`

**Python not found?**
- Install Python 3 from https://python.org
- Or just open `index.html` directly in your browser

**Image not loading?**
- Make sure `vish_ramesh.jpeg` exists in `../src/public/`
- Or update the image path in `index.html`

## Customization

To update content, edit `index.html`:
- Change text in the HTML sections
- Update links in the links section
- Modify styling in the `<style>` section
- Add new sections as needed 