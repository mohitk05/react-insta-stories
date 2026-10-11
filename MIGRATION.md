# Migration Guide: v2.x → v3.0

This guide helps you upgrade from react-insta-stories v2.x to v3.0.

## Breaking Changes

### 1. Node.js Version Requirement

**v2.x:** No specific Node version requirement  
**v3.0:** Requires Node.js ≥20.0.0

**Action Required:**
```bash
node --version  # Must be 20.0.0 or higher
```

If you're on an older version, upgrade Node.js before installing v3.0.

### 2. Package Format - Pure ESM

**v2.x:** UMD bundle  
**v3.0:** ESM as primary format, CommonJS as fallback

The package is now published as native ES modules with a CommonJS fallback for compatibility.

**No Action Required for Most Users:**
Modern bundlers (Vite, webpack 5, Rollup, esbuild) and Node.js 20+ handle this automatically via the `exports` field in package.json.

**If You're Using Node.js Directly:**

```javascript
// ✅ Works (ESM)
import Stories from 'react-insta-stories';

// ✅ Works (CommonJS - fallback)
const Stories = require('react-insta-stories');
```

**If You Encounter Import Issues:**

For TypeScript projects, ensure your `tsconfig.json` uses modern module resolution:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"  // or "node16" / "nodenext"
  }
}
```

### 3. TypeScript Configuration

**v2.x:** Compatible with older TypeScript versions  
**v3.0:** Built with TypeScript 5.9, uses `moduleResolution: "bundler"`

**Action Required for TypeScript Users:**

If you're using TypeScript, update to TypeScript 5.0+ and use modern module resolution:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ESNext"
  }
}
```

## Non-Breaking Changes

### Build System

- **Tooling:** Migrated from webpack + Babel to Vite + SWC (faster builds, better DX)
- **Package Manager:** Examples and development now use pnpm (you can still use npm/yarn to install the package)
- **Bundle Size:** Slightly smaller due to better tree-shaking with native ESM

### Development Workflow

If you're contributing to the library:

**v2.x:**
```bash
npm install
npm run build
npm run example
```

**v3.0:**
```bash
pnpm install
pnpm build
pnpm example
```

## Upgrade Steps

### Step 1: Check Node.js Version

```bash
node --version
```

Ensure you're on Node.js 20.0.0 or higher.

### Step 2: Update Dependency

```bash
npm install react-insta-stories@^3.0.0
# or
yarn add react-insta-stories@^3.0.0
# or
pnpm add react-insta-stories@^3.0.0
```

### Step 3: Verify Build

Run your build process to ensure the new package format works with your bundler:

```bash
npm run build
```

### Step 4: Test Imports

Verify your imports work correctly:

```javascript
import Stories from 'react-insta-stories';
// Should work without issues
```

### Step 5: Run Tests

Run your test suite to ensure nothing broke:

```bash
npm test
```

## Rollback Plan

If you encounter issues with v3.0:

```bash
npm install react-insta-stories@^2.6.4
```

This will downgrade to the last v2.x release. Please [open an issue](https://github.com/mohitk05/react-insta-stories/issues) describing the problem so we can help resolve it.

## Benefits of Upgrading

✅ **Faster Builds:** Native ESM enables better tree-shaking  
✅ **Better DX:** Modern tooling (Vite, SWC) for contributors  
✅ **Future-Proof:** Aligned with ecosystem direction (ESM, modern Node)  
✅ **Smaller Bundles:** Improved dead code elimination  
✅ **Same API:** No changes to how you use the component

## Common Issues

### "Cannot find module" or Import Errors

**Cause:** Bundler doesn't support `exports` field  
**Solution:** Upgrade your bundler (webpack 5+, Vite 2+, Rollup 3+)

### TypeScript Errors About Module Resolution

**Cause:** Old `moduleResolution` setting  
**Solution:** Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Node.js Version Error During Install

**Cause:** Node.js < 20.0.0  
**Solution:** Upgrade Node.js to v20 or later

## Need Help?

- 📖 [Full Documentation](https://github.com/mohitk05/react-insta-stories#readme)
- 🐛 [Report Issues](https://github.com/mohitk05/react-insta-stories/issues)
- 💬 [Discussions](https://github.com/mohitk05/react-insta-stories/discussions)
