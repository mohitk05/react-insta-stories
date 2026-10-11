# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-10-12

### ⚠️ BREAKING CHANGES

- **Node.js ≥20.0.0 required:** The package now requires Node.js version 20 or higher
- **Pure ESM package:** The package is now published as native ES modules with CommonJS fallback
  - UMD format has been removed
  - Modern bundlers handle this automatically via `exports` field
  - Both ESM (`import`) and CommonJS (`require`) are supported
- **TypeScript configuration:** Built with TypeScript 5.9 using `moduleResolution: "bundler"`
  - TypeScript users should use TS 5.0+ with modern module resolution
  - Update `tsconfig.json` to use `moduleResolution: "bundler"` or `"node16"`

### Changed

- **Build system:** Migrated from webpack + Babel to Vite + SWC
  - Significantly faster builds
  - Better tree-shaking with native ESM
  - Improved development experience
- **Package manager:** Development now uses pnpm instead of npm
  - Faster installs
  - Better disk space efficiency
  - Strict dependency resolution
- **Monorepo structure:** Example app is now a pnpm workspace member
  - Better isolation between library and example
  - Shared dependency management
- **Bundle output:** Dual format output (ESM + CJS)
  - `dist/index.js` - ES module (primary)
  - `dist/index.cjs` - CommonJS (fallback)
  - `dist/index.d.ts` - TypeScript declarations

### Added

- Package `exports` field for modern module resolution
- Source maps for both ESM and CJS builds
- TypeScript declaration maps for better IDE support

### Removed

- UMD bundle format (no longer needed with modern bundlers)
- webpack and Babel configuration
- Support for Node.js versions below 20.0.0

### Migration

See [MIGRATION.md](MIGRATION.md) for detailed upgrade instructions.

### Internal

- Updated all dependencies to latest stable versions
- React 18.3.1 for development and testing (peer dependency remains ≥16.8.2)
- TypeScript 5.9
- Vite 6.0
- Example app uses React 18 `createRoot` API

---

## [2.6.4] - Previous Release

Previous versions used webpack + Babel with UMD output. See git history for older changes.
