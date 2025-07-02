# Wix-GitHub Connection Guide for vishramesh.com

## Current Status ✅
- **Repository**: `vishrmsh/personal_website` (CORRECT)
- **Current Site ID**: `465aed41-dc2d-41a6-9b34-ba62eff62bb1`
- **Previous Site ID**: `bef66e95-89ba-4548-9b26-3e27892bd741` (mentioned in troubleshooting)

## How to Verify & Fix Connection

### Step 1: Identify Your Correct Wix Site
1. Go to [Wix Studio](https://manage.wix.com/)
2. Find your **vishramesh.com** website
3. Click on it
4. Look at the URL - it will contain your site ID: `https://manage.wix.com/dashboard/[SITE_ID]/...`

### Step 2: Update Site ID (if needed)
If the site ID in `wix.config.json` doesn't match your vishramesh.com site:
1. Replace the `siteId` value in `wix.config.json`
2. Save the file
3. Run `wix dev` to test the connection

### Step 3: Test Connection
```bash
# In your local environment (not this remote one):
wix dev
```

Your local development should now connect to the correct vishramesh.com site.

## Current Project Structure ✅
Your Wix Velo project is properly set up with:
- ✅ Professional homepage code in `Homepage.c1dmp.js`
- ✅ Proper package.json with Wix dependencies
- ✅ GitHub repository connected
- ✅ Push scripts for easy deployment

## Next Steps
1. **Verify site ID** using steps above
2. **Test locally** with `wix dev`
3. **Deploy changes** using `npm run push`

## Professional Portfolio Ready! 🚀
Your homepage already includes:
- Complete professional timeline (2015-2024)
- CEO & Founder of Vy Labs AI highlighted
- All your research links and credentials
- Clean, VC-ready presentation

The code will automatically update your site elements with your professional content when you preview or publish.