# Release Preparation: v3.0.0

## Pre-Release Checklist

✅ **Version Updated:** package.json shows v3.0.0  
✅ **Documentation Complete:**
  - MIGRATION.md created with comprehensive upgrade guide
  - README.md updated with Node 20+ requirement and new development workflow
  - CHANGELOG.md documents all breaking changes and improvements

✅ **Build Verification:**
  - Library builds successfully: `dist/index.js` (ESM) and `dist/index.cjs` (CJS)
  - ESM import tested: `node test-import.mjs` ✓
  - CJS require tested: `node test-require.cjs` ✓ (exports `default`, `WithHeader`, `WithSeeMore`)
  - Example app builds successfully
  - Full build pipeline (`pnpm buildall`) completes without errors

✅ **Git Tag:** v3.0.0 tag created

## Publishing Instructions

When ready to publish to npm:

```bash
# 1. Ensure you're on the master branch with a clean working tree
git status

# 2. Build the library one more time to ensure dist/ is current
pnpm build

# 3. Publish to npm (requires npm login and publish permissions)
npm publish

# 4. Push tags to GitHub
git push origin v3.0.0
git push origin master

# 5. Create a GitHub Release
# Go to: https://github.com/mohitk05/react-insta-stories/releases/new
# - Tag: v3.0.0
# - Title: v3.0.0 - Modern ESM Build with Vite
# - Description: Copy content from CHANGELOG.md for v3.0.0
```

## Post-Release Steps

1. **Update Example Deployment:**
   ```bash
   pnpm deploy
   ```

2. **Announce Release:**
   - GitHub Discussions
   - Discord community
   - Update relevant issues/PRs referencing the migration

## Package Contents

The published package includes:
- `dist/` - Compiled library (ESM + CJS + TypeScript declarations + source maps)
- `README.md` - Documentation with updated requirements
- `MIGRATION.md` - Upgrade guide for v2.x users
- `CHANGELOG.md` - Version history
- `package.json` - Package metadata with ESM exports

Files excluded via `.npmignore` or `"files"` field:
- `src/` - Source TypeScript files
- `example/` - Example application
- Development configuration files
- Git and IDE files

## Breaking Changes Summary

⚠️ **Node.js ≥20.0.0 required**  
⚠️ **Pure ESM package** (with CJS fallback via exports)  
⚠️ **UMD format removed**  
⚠️ **TypeScript 5.0+ recommended** with `moduleResolution: "bundler"`

## npm Package Preview

Before publishing, you can preview what will be included:

```bash
npm pack --dry-run
```

This shows exactly which files will be published to npm.

---

**Current Status:** Ready for review and npm publish when approved by maintainer.
