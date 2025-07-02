# GitHub Pages Setup Guide

## ✅ Code Already Synced!
Your portfolio files are now live at: https://github.com/vishrmsh/personal_website/tree/main/local-site

## 🚀 Enable GitHub Pages (5 minutes)

### Step 1: Go to Repository Settings
1. Visit: https://github.com/vishrmsh/personal_website
2. Click the **"Settings"** tab (far right)
3. Scroll down to **"Pages"** in the left sidebar

### Step 2: Configure Source
In the GitHub Pages section:
1. **Source**: Select "Deploy from a branch"
2. **Branch**: Choose "main"  
3. **Folder**: Select "/root" (we'll fix this next)
4. Click **"Save"**

### Step 3: Move Files to Root (Required for GitHub Pages)

**Option A: Quick Setup (Recommended)**
Run these commands in your terminal:

```bash
cd /Users/vish/Documents/Projects/vishrmsh_personal

# Copy files from local-site to root
cp local-site/index.html .
cp local-site/CNAME .
cp local-site/vish_ramesh.jpeg .

# Commit and push
git add index.html CNAME vish_ramesh.jpeg
git commit -m "Move GitHub Pages files to root directory"
git push origin main
```

**Option B: Alternative - Create gh-pages branch**
```bash
# Create new branch from local-site content
git checkout -b gh-pages
git checkout main -- local-site/
mv local-site/* .
rmdir local-site
git add .
git commit -m "Set up gh-pages branch"
git push origin gh-pages
```

### Step 4: Update GitHub Pages Settings
1. Go back to Settings > Pages
2. **Branch**: "main" (or "gh-pages" if you used Option B)
3. **Folder**: "/root"
4. Click **"Save"**

### Step 5: Configure Custom Domain
1. In the same Pages settings
2. **Custom domain**: Enter `vishrmsh.com`
3. Check **"Enforce HTTPS"**
4. Click **"Save"**

## 🌐 DNS Configuration

### For vishrmsh.com (Wix Domain)
1. Log into Wix dashboard
2. Go to Domains → DNS Records
3. Replace existing records with:

```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153  
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
Type: CNAME Name: www   Value: vishrmsh.github.io
```

### For vishramesh.com (GoDaddy Domain)
1. Log into GoDaddy
2. Go to DNS Management
3. Add these records:

```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153
Type: A     Name: @     Value: 185.199.110.153  
Type: A     Name: @     Value: 185.199.111.153
Type: CNAME Name: www   Value: vishrmsh.github.io
```

## 🎯 Final Result

After DNS propagation (5-24 hours):
- ✅ **Primary**: https://vishrmsh.com → Your GitHub Pages site
- ✅ **Secondary**: https://vishramesh.com → Same GitHub Pages site  
- ✅ **GitHub URL**: https://vishrmsh.github.io → Your site
- ✅ **Free hosting**: $0/month forever
- ✅ **SSL certificate**: Automatic HTTPS
- ✅ **No Wix dependency**: Complete independence

## 🔧 Testing

**Before DNS change** (immediate):
- Your site will be live at: https://vishrmsh.github.io
- Test all links and functionality

**After DNS change** (24 hours):
- https://vishrmsh.com will show your new site
- https://vishramesh.com will redirect to the same site

## 📱 Mobile Testing
Your site is fully responsive and will work perfectly on:
- Desktop browsers
- Mobile phones  
- Tablets
- Any device

## 🚀 Benefits Achieved

✅ **Cost Savings**: $0/month vs Wix fees
✅ **Performance**: Faster loading than Wix
✅ **Control**: Edit anything you want  
✅ **SEO**: Better search engine optimization
✅ **Professional**: Clean, custom code
✅ **Reliable**: GitHub's 99.9% uptime

## 📞 Support

If you encounter issues:
1. Check: https://status.github.com/
2. DNS changes take 5-24 hours to propagate
3. GitHub Pages status: Settings > Pages in your repo

---

**Ready to leave Wix behind!** 🎉 