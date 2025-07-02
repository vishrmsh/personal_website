# Wix Development Troubleshooting Guide

## 🚨 PRIORITY ACTION NEEDED

**You must authenticate with Wix CLI first** - this will likely resolve most of your issues.

Run: `npx @wix/cli login` and complete the browser authentication process.

---

## Current Errors

You're experiencing two main errors when running `wix dev`:

1. **Error loading extension IDs and types** - This affects error checking and auto-completion
2. **Failed to request pages diff** - This affects syncing pages for UI version 477

## Root Cause Analysis

- **Primary Issue**: Not authenticated with Wix CLI
- **Secondary Issue**: Known temporary Wix platform issues
- **Impact**: Development environment partially functional but degraded

## Immediate Solutions

### 1. Authentication Issue (Critical)

**Problem**: You're not authenticated with Wix CLI
```bash
npx @wix/cli whoami
# Returns: "You are not authenticated, log in by running wix login"
```

**Solution**: 
```bash
# Login to Wix CLI (requires manual browser authentication)
npx @wix/cli login
# You'll receive a device code (e.g., 6FHOR3OD)
# Press ENTER to open the login URL in your browser
# Paste the device code when prompted
# Complete the authentication process
```

**Note**: This step requires manual interaction and cannot be automated.

### 2. Extension Loading Error

**Status**: According to Wix documentation, this is a **known issue** that Wix is actively working to resolve.

**Current Workaround**:
- You can continue developing despite this error
- Error checking and auto-completion will be disabled
- This does not prevent your site from functioning

**Potential Solutions**:
```bash
# Try updating to the latest CLI version
npm update @wix/cli

# Clear CLI cache (if applicable)
npx @wix/cli logout
npx @wix/cli login

# Restart development server
npx @wix/cli dev
```

### 3. Pages Diff Synchronization Error

**Problem**: "Failed to request pages diff" for UI version 477

**Solutions** (try in order):

#### Option A: Restart Development Server
```bash
# Stop current wix dev process (Ctrl+C)
# Then restart
npx @wix/cli dev
```

#### Option B: Clear Local Cache
```bash
# If you have a local cache directory, clear it
rm -rf .wix-cache/ # (if it exists)
rm -rf node_modules/.cache/ # (if it exists)
```

#### Option C: Use Tunnel Flag (for Cloud IDEs)
```bash
# If you're using a cloud IDE, try the tunnel flag
npx @wix/cli dev --tunnel
```

#### Option D: Authentication Refresh
```bash
# Logout and login again
npx @wix/cli logout
npx @wix/cli login
npx @wix/cli dev
```

### 4. Check Project Configuration

**Verify your wix.config.json**:
```json
{
  "siteId": "465aed41-dc2d-41a6-9b34-ba62eff62bb1",
  "uiVersion": "477"
}
```

**Ensure package.json has correct CLI version**:
You currently have `@wix/cli@1.1.101` which is recent.

## Step-by-Step Troubleshooting Process

1. **First, authenticate with Wix**:
   ```bash
   npx @wix/cli login
   ```

2. **Verify authentication**:
   ```bash
   npx @wix/cli whoami
   ```

3. **Try development server again**:
   ```bash
   npx @wix/cli dev
   ```

4. **If errors persist, check for updates**:
   ```bash
   npm update @wix/cli
   ```

5. **As a last resort, re-authenticate**:
   ```bash
   npx @wix/cli logout
   npx @wix/cli login
   npx @wix/cli dev
   ```

## Alternative Development Approaches

### If Local Development Continues to Fail:

1. **Use Wix Editor Directly**: 
   - Go to your Wix site dashboard
   - Use the built-in editor for immediate changes

2. **Preview Without Local Dev**:
   ```bash
   npx @wix/cli preview
   ```

3. **Deploy and Test**:
   ```bash
   npx @wix/cli publish
   ```

## Expected Behavior

According to Wix documentation:
- The "extension IDs and types" error is **temporary** and being fixed by Wix
- You can continue development despite these errors
- Core functionality should still work

## When to Contact Support

Contact Wix support if:
- Errors persist after authentication
- You cannot access your development site at all
- The errors prevent core functionality from working
- After trying all troubleshooting steps above

## Quick Reference Commands

```bash
# Check authentication
npx @wix/cli whoami

# Login
npx @wix/cli login

# Start development
npx @wix/cli dev

# Check CLI version
npx @wix/cli --version

# Preview site
npx @wix/cli preview

# Build and publish
npx @wix/cli build
npx @wix/cli publish
```

## Additional Notes

- These errors are **common** and **known issues** in the Wix development environment
- The extension loading error is acknowledged by Wix as a temporary problem
- Your site functionality should not be affected despite these warnings
- Always ensure you're authenticated before running development commands

## Additional Resources

### Wix Developer Community
- **Discord**: Join the Wix App developers community for real-time support
- **Dev.to**: Search for Wix development guides and community solutions
- **GitHub**: Check Wix's official repositories for updates and issues

### Official Documentation
- [Wix CLI Commands Reference](https://dev.wix.com/docs/build-apps/develop-your-app/frameworks/wix-cli/app-development/cli-command-reference)
- [Wix Development Troubleshooting](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/testing-monitoring/testing-troubleshooting/testing-and-troubleshooting-your-code)
- [About the Wix CLI for Apps](https://dev.wix.com/docs/build-apps/develop-your-app/frameworks/wix-cli/about-the-wix-cli-for-apps)

### Getting Help
- **Wix Support**: Contact support if issues persist after troubleshooting
- **Schedule Feedback Session**: Wix offers feedback sessions with their team
- **Community Forums**: Post on Wix developer forums for community assistance

---

*Last updated: January 2025 | Based on Wix CLI version 1.1.101 and current known issues*

**Next Steps**: Start with authentication (`npx @wix/cli login`) and report back if issues persist after following this guide.