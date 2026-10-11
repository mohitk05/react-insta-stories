# Modernize Tooling Migration - Design Specification

**Date:** 2026-10-11  
**Version:** 3.0.0 (Breaking Change)  
**Status:** Design Approved

## Overview

Modernize react-insta-stories build tooling and dependency management by migrating from webpack + npm to Vite + pnpm, adopting ESM-first package distribution with CJS fallback, and upgrading all dependencies to their latest stable versions.

## Motivation

### Current Pain Points
- **Slow builds:** Webpack + Babel compilation is slow for development
- **Outdated dependencies:** Multiple major versions behind (TypeScript 4.9, Babel 7, etc.)
- **npm inefficiency:** Slower installs, disk space waste from duplicate packages
- **Legacy build setup:** Webpack configuration is complex and harder to maintain
- **No modern ESM support:** UMD-only output doesn't leverage modern bundler optimizations

### Benefits of Migration
- **20x faster builds:** Vite with SWC compilation vs Webpack with Babel
- **Better DX:** Instant HMR, faster dev server startup
- **Smaller package:** ESM tree-shaking benefits for consumers
- **Reduced maintenance:** Simpler Vite config vs complex Webpack setup
- **Modern ecosystem alignment:** ESM is the future, CJS is legacy fallback
- **Disk efficiency:** pnpm's content-addressable store saves ~50% disk space
- **Faster CI:** pnpm's efficient caching and parallel installs

## Design Constraints

### Must Maintain
- ✅ Public API and exports remain unchanged
- ✅ React 16.8+ peer dependency support (wide compatibility)
- ✅ TypeScript declaration files generation
- ✅ React and ReactDOM as externals (peer dependencies)
- ✅ Example app for development and demos

### Breaking Changes (Acceptable for v3.0.0)
- ❌ Node 20+ required (was: any Node version)
- ❌ ESM-first package (with CJS fallback)
- ❌ Drops UMD format (replaced with ESM + CJS)
- ❌ Older bundlers (webpack 4) need configuration updates

## Architecture

### Package Structure

```
react-insta-stories/
├── pnpm-workspace.yaml          # Workspace configuration
├── package.json                 # Library package
├── vite.config.ts              # Library build config
├── tsconfig.json               # Root TypeScript config
├── tsconfig.build.json         # Build-specific TS config
├── src/                        # Library source (unchanged)
│   ├── index.tsx
│   ├── components/
│   ├── renderers/
│   └── ...
├── dist/                       # Build output
│   ├── index.js               # ESM bundle
│   ├── index.cjs              # CJS bundle
│   ├── index.d.ts             # TypeScript declarations
│   ├── index.d.ts.map         # Source maps for types
│   └── style.css              # Extracted styles (if any)
└── example/                    # Example app workspace
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── index.html
    └── src/
```

### Package.json Configuration

#### Root Library Package

```json
{
  "name": "react-insta-stories",
  "version": "3.0.0",
  "type": "module",
  "description": "A React component for Instagram like stories",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "README.md"
  ],
  "engines": {
    "node": ">=20.0.0"
  },
  "scripts": {
    "build": "vite build && tsc --project tsconfig.build.json",
    "dev": "vite build --watch",
    "dev:example": "pnpm --filter example dev",
    "example": "pnpm --filter example dev",
    "build:example": "pnpm --filter example build",
    "preview:example": "pnpm --filter example preview",
    "prepare": "pnpm build",
    "typecheck": "tsc --noEmit",
    "predeploy": "pnpm --filter example build",
    "deploy": "gh-pages -d example/dist",
    "postversion": "git push && git push --tags"
  },
  "peerDependencies": {
    "react": ">=16.8.2",
    "react-dom": ">=16.8.2"
  },
  "devDependencies": {
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react-swc": "^4.0.0",
    "gh-pages": "^6.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.7.2",
    "vite": "^6.0.0"
  }
}
```

#### Example App Package

```json
{
  "name": "example",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "workspace:*",
    "react-dom": "workspace:*",
    "react-insta-stories": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "workspace:*",
    "@types/react-dom": "workspace:*",
    "@vitejs/plugin-react-swc": "workspace:*",
    "typescript": "workspace:*",
    "vite": "workspace:*"
  }
}
```

Note: `workspace:*` protocol links to the root workspace packages.

### Workspace Configuration

**pnpm-workspace.yaml:**
```yaml
packages:
  - 'example'
```

### TypeScript Configuration

#### Root tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "declarationDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "example"]
}
```

#### tsconfig.build.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "outDir": "./dist",
    "declarationDir": "./dist"
  },
  "include": ["src"]
}
```

#### example/tsconfig.json

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "declaration": false,
    "declarationMap": false
  },
  "include": ["src"],
  "references": [{ "path": ".." }]
}
```

### Vite Configuration

#### Root vite.config.ts (Library)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ReactInstaStories',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'index.js';
        if (format === 'cjs') return 'index.cjs';
        return `index.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
});
```

#### example/vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
```

#### example/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Insta Stories - Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Migration Steps

### Phase 1: Setup pnpm Workspace

1. **Install pnpm globally** (if not installed)
   ```bash
   npm install -g pnpm
   ```

2. **Create workspace configuration**
   - Create `pnpm-workspace.yaml`
   - Define example app as workspace package

3. **Remove old lock files**
   - Delete `package-lock.json`
   - Delete `example/package-lock.json`

4. **Initialize pnpm**
   ```bash
   pnpm install
   ```

### Phase 2: Update TypeScript Configuration

1. **Update root tsconfig.json**
   - Change `module` to `"ESNext"`
   - Change `moduleResolution` to `"bundler"`
   - Update `target` to `"ES2020"`
   - Add `declaration` and `declarationMap`

2. **Create tsconfig.build.json**
   - For declaration-only builds

3. **Update example/tsconfig.json**
   - Extend from root
   - Set `noEmit: true`

4. **Upgrade TypeScript**
   ```bash
   pnpm add -D typescript@latest
   ```

### Phase 3: Create Vite Configurations

1. **Install Vite and plugins**
   ```bash
   pnpm add -D vite @vitejs/plugin-react-swc
   ```

2. **Create vite.config.ts for library**
   - Configure library mode
   - Set up externals for React/ReactDOM
   - Configure dual output (ESM + CJS)

3. **Create vite.config.ts for example**
   - Standard React app configuration
   - Dev server settings

4. **Create example/index.html**
   - Entry point for Vite dev server

5. **Update example/src structure**
   - Rename entry file if needed (e.g., `index.js` → `main.tsx`)
   - Update imports to use ESM syntax

### Phase 4: Update Package Configuration

1. **Update root package.json**
   - Add `"type": "module"`
   - Update `main`, `module`, `types` fields
   - Add `exports` field with conditional exports
   - Add `engines` field for Node 20+
   - Update all scripts to use pnpm and Vite
   - Bump version to 3.0.0

2. **Update example/package.json**
   - Add `"type": "module"`
   - Add `"private": true`
   - Change dependencies to use `workspace:*`
   - Update scripts for Vite

3. **Update devDependencies**
   ```bash
   # Remove webpack and babel tooling
   pnpm remove webpack webpack-cli webpack-dev-server webpack-bundle-analyzer
   pnpm remove babel-loader @babel/core @babel/preset-env @babel/preset-react
   pnpm remove ts-loader source-map-loader style-loader css-loader
   pnpm remove react-svg-loader @teamsupercell/typings-for-css-modules-loader
   
   # Add Vite and modern tooling
   pnpm add -D vite @vitejs/plugin-react-swc
   pnpm add -D typescript@latest
   pnpm add -D @types/react@latest @types/react-dom@latest
   pnpm add -D gh-pages@latest
   
   # Update React versions for testing
   pnpm add -D react@latest react-dom@latest
   ```

### Phase 5: Remove Old Configuration

1. **Delete files:**
   - `webpack.config.js`
   - `example/webpack.config.js`
   - `.babelrc`
   - `package-lock.json` (if not already removed)
   - `example/package-lock.json` (if not already removed)

2. **Update .gitignore:**
   ```gitignore
   # Add
   pnpm-lock.yaml
   .pnpm-store
   
   # Keep existing
   node_modules
   dist
   example/dist
   ```

### Phase 6: Handle SVG Imports

Since `react-svg-loader` was used with webpack, we need to handle SVG imports in Vite:

**Option A: Use vite-plugin-svgr**
```bash
pnpm add -D vite-plugin-svgr
```

Update vite.config.ts:
```typescript
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  // ...
});
```

**Option B: Import as URLs**
Update imports from:
```typescript
import Icon from './icon.svg';
```

To:
```typescript
import Icon from './icon.svg?react';
```

### Phase 7: Test Builds

1. **Build library**
   ```bash
   pnpm build
   ```

2. **Verify outputs:**
   - Check `dist/index.js` (ESM)
   - Check `dist/index.cjs` (CJS)
   - Check `dist/index.d.ts` (TypeScript declarations)
   - Verify React/ReactDOM are not bundled

3. **Test example app:**
   ```bash
   pnpm dev:example
   ```

4. **Build example app:**
   ```bash
   pnpm build:example
   ```

### Phase 8: Update Documentation

1. **Update README.md:**
   - Document Node 20+ requirement
   - Update development workflow commands
   - Add migration guide for v2 → v3 users
   - Update installation instructions (still `npm/yarn/pnpm install react-insta-stories`)

2. **Create MIGRATION.md:**
   - Document breaking changes
   - Provide upgrade guide
   - List bundler compatibility requirements

3. **Update CHANGELOG.md:**
   - Document all breaking changes
   - List new features (ESM support)
   - Note dependency upgrades

## Breaking Changes Documentation

### For Library Users (v2 → v3)

#### 1. Node Version Requirement
**Before:** Any Node version  
**After:** Node 20.0.0 or higher

**Action Required:** Upgrade Node.js to v20+

#### 2. Package Format
**Before:** UMD bundle only  
**After:** ESM primary, CJS fallback via conditional exports

**Action Required:**
- Modern bundlers (webpack 5+, Vite, Rollup): No action needed
- webpack 4 or older: Update `mainFields` in webpack config:
  ```javascript
  resolve: {
    mainFields: ['module', 'main']
  }
  ```
- Direct `<script>` tag usage: No longer supported, use a bundler or CDN that provides UMD (e.g., unpkg with `?module` param)

#### 3. TypeScript Module Resolution
**Before:** Any module resolution  
**After:** Requires bundler-compatible module resolution

**Action Required:**
- Update `tsconfig.json` if needed:
  ```json
  {
    "compilerOptions": {
      "moduleResolution": "bundler" // or "node16"
    }
  }
  ```

#### 4. Import Syntax
**Before:** CommonJS require worked in some contexts  
**After:** Use ESM imports

**Action Required:**
```javascript
// ❌ Old (may not work)
const Stories = require('react-insta-stories');

// ✅ New (always works)
import Stories from 'react-insta-stories';
```

### Non-Breaking Changes
- ✅ React 16.8+ still supported (peer dependency unchanged)
- ✅ All exports and APIs remain the same
- ✅ TypeScript types unchanged
- ✅ Component props and behavior unchanged

## Testing Strategy

### Build Verification
1. **ESM output:** Verify tree-shakeable, React externalized
2. **CJS output:** Verify require() works, React externalized
3. **TypeScript:** Verify .d.ts files generated correctly
4. **Source maps:** Verify .d.ts.map and .js.map present

### Runtime Testing
1. **Example app:** Verify all features work in dev and prod builds
2. **React 16.8:** Test with minimum supported React version
3. **React 18:** Test with current stable
4. **React 19:** Test with latest

### Bundle Testing
1. **Test in CRA (Create React App):** Verify ESM import works
2. **Test in Vite project:** Verify tree-shaking works
3. **Test in Next.js:** Verify SSR compatibility
4. **Test in webpack 5:** Verify conditional exports work

## Rollback Plan

If critical issues are discovered post-migration:

1. **Revert Git commits:**
   ```bash
   git revert <commit-range>
   ```

2. **Re-publish v2.x.x:**
   - Checkout previous tag
   - Apply critical fixes
   - Publish patch version

3. **Mark v3.0.0 as deprecated:**
   ```bash
   npm deprecate react-insta-stories@3.0.0 "Critical issues, use 2.x instead"
   ```

## Success Metrics

### Performance
- ✅ Build time < 5 seconds (from ~30s with webpack)
- ✅ Dev server startup < 2 seconds
- ✅ HMR update < 500ms

### Package Size
- ✅ ESM bundle < UMD bundle size
- ✅ Tree-shaking reduces consumer bundle by ~20%

### Developer Experience
- ✅ Single `pnpm install` for entire monorepo
- ✅ Example app hot-reloads instantly
- ✅ TypeScript errors show immediately

### Compatibility
- ✅ Works with webpack 5+
- ✅ Works with Vite
- ✅ Works with Rollup
- ✅ Works with Next.js
- ✅ React 16.8, 17, 18, 19 all pass tests

## Future Enhancements

Post-migration improvements to consider:

1. **Add vitest for unit testing**
2. **Add Playwright for E2E testing**
3. **Setup Changesets for versioning**
4. **Add bundle size tracking**
5. **Setup GitHub Actions with pnpm caching**
6. **Consider dropping React 16 support in v4**

## References

- [Vite Library Mode](https://vite.dev/guide/build.html#library-mode)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Node.js ESM](https://nodejs.org/api/esm.html)
- [Package.json Exports](https://nodejs.org/api/packages.html#exports)
- [TypeScript Bundler Resolution](https://www.typescriptlang.org/tsconfig#moduleResolution)
