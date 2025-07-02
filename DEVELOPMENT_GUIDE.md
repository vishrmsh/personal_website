# 🚀 Development Guide - Dr. Vish Ramesh Portfolio

## Current Status: Wix Dev Server Issues
The `wix dev` command is experiencing sync issues with UI version 477. This is a **known Wix platform issue**.

## ✅ **Recommended Development Workflow**

### **Method 1: Wix Online Editor (Primary)**
1. **Open Wix Editor**: https://www.wix.com/my-account/site-selector/
2. **Select your site**: Look for "vishramesh.com" or site ID `465aed41-dc2d-41a6-9b34-ba62eff62bb1`
3. **Edit directly** in the browser-based editor
4. **Publish changes** when ready

### **Method 2: Local Development + GitHub Sync**
1. **Edit local files** in `src/` directory
2. **Push changes regularly** using our automated scripts:

```bash
# Quick push
npm run quick-push

# Custom message
./push-changes.sh "Your update description"

# Simple save
npm run save
```

### **Method 3: Hybrid Approach (Best of Both)**
1. **Design/Layout**: Use Wix online editor
2. **Code/Logic**: Edit local files in `src/pages/` and `src/backend/`
3. **Regular backups**: Push to GitHub frequently

## 🛠 **Troubleshooting Wix Dev Server**

### Current Errors:
```
✖ An error occurred while loading extension IDs and types
✖ Syncing pages for your local UI version 477 to local code files
✖ Failed to request pages diff
```

### Attempted Fixes:
- ✅ Cleared `.wix/cache` and temp files
- ✅ Verified login status (logged in as vish93@gmail.com)
- ✅ Updated Wix CLI to v1.1.101
- ❌ Issues persist (Wix platform problem)

### Alternative Commands:
```bash
# Check status
wix whoami
wix --version

# Try HTTPS mode
wix dev --https

# Manual sync
wix sync-types
```

## 📁 **File Structure for Local Development**

```
src/
├── pages/
│   ├── Homepage.c1dmp.js    # Main homepage logic
│   └── masterPage.js        # Site-wide functionality
├── backend/
│   ├── permissions.json     # API permissions
│   └── README.md
└── public/
    ├── vish_ramesh.jpeg     # Profile photo
    └── vy_labs_logo.jpg     # Company logo
```

## 🌐 **Site Information**

- **Domain**: www.vishramesh.com
- **Wix Site ID**: 465aed41-dc2d-41a6-9b34-ba62eff62bb1
- **Repository**: https://github.com/vishrmsh/personal_website.git
- **Account**: vish93@gmail.com

## 📝 **Regular Backup Commands**

```bash
# Immediate backup
npm run backup

# Save progress
npm run save

# Quick update
npm run quick-push

# Custom message
./push-changes.sh "Major portfolio updates"
```

## 🔧 **Next Steps**

1. **Use Wix Online Editor** for immediate development
2. **Edit local files** for code-based changes
3. **Push to GitHub regularly** using our scripts
4. **Monitor Wix status** for dev server fix: https://discord.gg/wixstudio

---
*Last updated: $(date '+%Y-%m-%d %H:%M')* 