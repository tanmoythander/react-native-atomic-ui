# Copilot Instructions for react-native-atomic-ui

This document provides essential context for GitHub Copilot to work effectively in this React Native UI component library.

## Build, Test, and Lint Commands

### Development & Building

```bash
npm run build              # Full build (TypeScript + esbuild)
npm run build:ts           # TypeScript compilation to dist/
npm run build:bundle       # Bundle with esbuild (ESM + CJS)
npm run build:types        # Type definitions only
npm run build:watch        # Watch mode during development
npm run clean              # Remove dist/ directory
```

### Testing

```bash
npm test                        # Run all tests
npm test:watch                  # Watch mode
npm test:coverage               # Generate coverage report
npm test -- Button.test.tsx     # Run specific test file
npm test -- --testNamePattern="theme"  # Run tests by pattern
```

### Code Quality

```bash
npm run lint                    # Check ESLint errors
npm run lint:fix                # Auto-fix ESLint errors
npm run format                  # Format code with Prettier
```

### Publishing

```bash
npm run prepublishOnly          # Runs: clean → build → test (for npm publish)
```

## Architecture & Key Patterns

### Directory Structure & Module Organization

```
src/
├── index.ts                 # Main entry point - re-exports all public APIs
├── components/              # Core UI components (zero dependencies)
│   ├── layouts/            # Flex containers (Box, Row, Column)
│   ├── typography/         # Text components (Text, H1-H6, Body variants)
│   ├── inputs/             # Interactive components (Button, etc.)
│   └── index.ts            # Component exports barrel file
├── theme/                  # Theme system
│   ├── index.tsx           # ThemeProvider & useTheme hook
│   └── themes.ts           # lightTheme & darkTheme definitions
├── types/                  # TypeScript type definitions
│   └── index.ts            # All interface exports
├── advanced/               # Optional peer dependency components
│   ├── date-picker/
│   ├── picker/
│   ├── file-picker/
│   └── rich-text/
└── utilities/              # Helper functions
```

**Key Pattern**: Components are grouped by feature, not by type. Each major section has a barrel export (`index.ts`) that re-exports all public APIs.

### Theme System Architecture

The library uses **React Context** for theme management (not Redux):

1. **ThemeContext** - Created at `src/theme/index.tsx`, stores `ThemeContextValue`
2. **ThemeProvider** - Wraps app, manages `isDark` state, detects system preference with `useColorScheme()`
3. **useTheme()** - Hook to access theme in components
4. **Theme object** - Contains: `colors`, `typography`, `spacing`, `borderRadius`, `shadows`

**System preference detection**: On mount, if `defaultTheme="system"`, reads device color scheme via `useColorScheme()`. Updates when system preference changes.

**Two themes provided**: `lightTheme` and `darkTheme` defined in `src/theme/themes.ts`. Both follow the same structure.

### Component Patterns

All components follow this structure:

1. Accept typed props interface
2. Use `useTheme()` hook to access current theme
3. Return `react-native` View/Text/etc.
4. Apply theme-aware styles via style props
5. Export convenience variants (e.g., `H1`, `Body1` are `Text` with preset variant)

**Example**: `Text` component in `src/components/typography/Text.tsx`:

- Base `Text` component with `variant` prop (typography style name)
- Convenience exports like `H1`, `Body1` that preset `variant`
- Uses `useTheme()` to access `theme.typography[variant]`

### Import Path Aliases

TypeScript `paths` configured in `tsconfig.json`:

```
@components/*  → src/components/*
@theme/*       → src/theme/*
@types/*       → src/types/*
@utilities/*   → src/utilities/*
@advanced/*    → src/advanced/*
```

**Key Rule**: Internal imports within `src/` use relative paths (e.g., `import type { BoxProps } from '../../types/index'`). Do NOT use path aliases for internal imports - only for test/external code.

### Type Definitions

All component prop types are centralized in `src/types/index.ts`:

- `Theme` - Full theme structure
- `ThemeContextValue` - What `useTheme()` returns
- `ColorBank`, `TypographySystem`, `TypographyConfig` - Theme sub-types
- `BoxProps`, `ButtonProps`, `TextProps`, `InputProps` - Component prop types

**TypeScript strict mode** is enabled: `noImplicitAny: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.

### Build Output

**esbuild config** (`esbuild.config.js`) generates:

- Entry points: `src/index.ts`, `src/theme/index.tsx`, `src/components/index.ts`, plus each `src/advanced/*` folder
- Formats: ESM (`.mjs`) + CommonJS (`.js`)
- **External dependencies**: `react` and `react-native` are NOT bundled (peer dependencies)
- Tree-shaking enabled

**dist/** structure mirrors `src/`:

- `dist/index.js` / `dist/index.mjs` - Main package
- `dist/theme/index.js` - Theme exports
- `dist/components/index.js` - Component exports
- `dist/advanced/*/index.js` - Optional components

### Testing Setup

- **Framework**: Jest + TypeScript (`ts-jest`) + React Native Testing Library v13
- **Test environment**: `node` (not React Native environment)
- **Mock system**: Comprehensive React Native mock in `__mocks__/react-native.js`
- **Coverage threshold**: 80% lines, 75% functions, 70% branches, 80% statements
- **Test location**: `__tests__/` directories or `*.test.ts(x)` files
- **Current status**: 107 tests passing across 12 suites, 29 snapshot tests, ~88% coverage
- **Note**: react-test-renderer deprecation warnings are suppressed in jest.setup.js

## Key Conventions

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `ThemeProvider`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme`)
- **Types/Interfaces**: PascalCase ending with type descriptor (e.g., `BoxProps`, `ThemeContextValue`)
- **Functions**: camelCase
- **Files**: Match export name (e.g., `Button.tsx` exports `Button`, `Box.tsx` exports `Box`)

### Import/Export Pattern

**Barrel exports** in index files collect all public APIs:

```typescript
// src/components/index.ts
export { Box, Row, Column } from './layouts/Box';
export { Text, H1, H2 /* ... */ } from './typography/Text';
export { Button } from './inputs/Button';
```

Main `src/index.ts` re-exports from barrel files:

```typescript
export { ThemeProvider, useTheme /* ... */ } from './theme/index';
export { Box, Row, Text, Button /* ... */ } from './components/index';
export type { Theme, ThemeContextValue /* ... */ } from './types/index';
```

**Type imports**: Use `import type { ... }` for TypeScript-only imports (prevents bundling issues).

### Component Prop Patterns

All components:

1. Accept props typed with specific `Props` interface from `src/types/index.ts`
2. Should accept `style?` prop for overrides
3. Should accept `testID?` prop for testing
4. Should NOT use `any` type (ESLint warns on this)
5. **String prop values MUST use curly braces with single quotes**: `variant={'primary'}` not `variant="primary"`

Example structure:

```typescript
export function Button(props: ButtonProps) {
  const { theme } = useTheme();
  // ... component logic
}

// Usage - ALWAYS use curly braces for string props
<Button variant={'primary'} size={'large'} />
<Box padding={'lg'} borderRadius={'md'} />
```

````

### Theme Styling Pattern

Components access theme like:
```typescript
const { theme, isDark } = useTheme();
const styles = {
  backgroundColor: theme.colors.primary,
  padding: theme.spacing.md,
  borderRadius: theme.borderRadius.sm,
};
````

**spacing** and **borderRadius** are objects with keys: `xs`, `sm`, `md`, `lg`, `xl`, `xxl` (and `full` for radius).

### Error Handling

`useTheme()` throws a descriptive error if called outside `ThemeProvider`:

```typescript
if (!context) {
  throw new Error('useTheme must be used within a ThemeProvider');
}
```

Always wrap components that use theme hooks with `ThemeProvider`.

### Optional/Advanced Components

Components in `src/advanced/*` are **placeholder stubs** that throw errors requiring peer dependencies:

```typescript
export function DatePickerInput() {
  throw new Error(
    'DatePickerInput requires peer dependency: @react-native-community/datetimepicker\n' +
      'Install it with: npm install @react-native-community/datetimepicker'
  );
}
```

**Design pattern**: Library doesn't fail to load if user doesn't install optional peer dependencies. Import fails only at component use time with clear error message.

### Exports Pattern

The package.json defines **export maps** for tree-shaking:

```json
{
  ".": { "require": "./dist/index.js", "import": "./dist/index.mjs" },
  "./theme": { "require": "./dist/theme/index.js", "import": "./dist/theme/index.mjs" },
  "./components": { "require": "./dist/components/index.js", "import": "./dist/components/index.mjs" },
  "./date-picker": { "require": "./dist/advanced/date-picker/index.js", ... },
  ...
}
```

Users can import sub-modules: `import { ThemeProvider } from 'react-native-atomic-ui/theme'`

## When Making Changes

### Adding a New Component

1. Create file in appropriate directory (e.g., `src/components/inputs/NewComponent.tsx`)
2. Define `Props` interface in `src/types/index.ts`
3. Import theme with `useTheme()`
4. Export from barrel file (`src/components/index.ts`)
5. Re-export from `src/index.ts`
6. Build: `npm run build`
7. Test: `npm test` (create test file if coverage affected)

### Modifying Theme

1. Edit theme structure in `src/types/index.ts` (`Theme` interface)
2. Update both `lightTheme` and `darkTheme` in `src/theme/themes.ts`
3. Update any affected component types
4. Run `npm run build` to verify TypeScript
5. Manual test in both light/dark modes

### Updating Dependencies

- **Peer dependencies** (`react`, `react-native`): Update `package.json` and `peerDependencies`
- **Dev dependencies**: Update normally, run `npm install`, test with `npm test && npm run build`
- **Optional dependencies**: Update `optionalDependencies` section

## Build & Deployment Notes

- **Source maps enabled** for debugging
- **Declaration maps enabled** (`*.d.ts.map`)
- **Tree shaking enabled** in esbuild
- **Minification**: Handled by downstream bundlers, not by library build
- **No dist/ in git**: Built on demand, excluded by `.gitignore`

## Development Workflow

1. Make changes to `src/`
2. `npm run lint:fix` to auto-fix style issues
3. `npm run build` to compile
4. `npm test` to verify tests pass (currently no tests, so exits with code 1)
5. Manual testing: `npm run build:watch` for watch mode during iteration
6. Push changes when ready

## Publishing Workflow

When ready to publish a new version to npm, follow these steps:

### 1. Verify Changes

```bash
npm run build
```

- Check for any errors or warnings in the build output
- If errors/warnings exist, fix them before proceeding
- Ensure build completes with "✅ Build completed successfully!"

### 2. Update Version

Edit `package.json` and increment the version number following [Semantic Versioning](https://semver.org/), use Patch by default:

- **Patch** (1.0.0 → 1.0.1): Bug fixes, minor changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

```json
{
  "version": "1.0.3" // Increment appropriately
}
```

### 3. Publish to npm

```bash
npm publish --access public
```

- Ensure you're logged in: `npm whoami`
- If not logged in: `npm login`
- The `prepublishOnly` script will run automatically (clean → build → test)
- Wait for successful publish confirmation

### 4. Update Example App

After successful npm publish, update the example app to use the new version:

```bash
cd examples/app
npm install react-native-atomic-ui@latest
```

### 5. Update iOS Pods (if needed)

If the library has native dependencies or if this is the first install:

```bash
cd examples/app/ios
pod install
cd ../..
```

### 6. Verify Example App

Test the example app to ensure it works with the published version:

```bash
cd examples/app
npm start          # Start Metro bundler
npm run ios        # Or: npm run android
```

### Complete Publishing Checklist

- [ ] Run `npm run build` and verify no errors
- [ ] Fix any build warnings or errors
- [ ] Increment version in `package.json`
- [ ] Run `npm publish --access public`
- [ ] Update example app: `cd examples/app && npm install react-native-atomic-ui@latest`
- [ ] Run `pod install` if needed (iOS native changes)
- [ ] Test example app on iOS/Android
- [ ] Commit version bump and lockfile changes
- [ ] Create git tag: `git tag v1.0.3 && git push --tags`

**Important Notes:**

- Always test the published package in the example app before marking release as complete
- The example app should use the npm package, not the local library, for production validation
- If publish fails, check npm authentication and package name availability

## Common Gotchas

1. **Relative imports inside src/**: Use relative paths, NOT path aliases (e.g., `'../../types/index'` not `'@types/index'`)
2. **useTheme() errors**: Always wrap components in `ThemeProvider` at app root
3. **Type-only imports**: Use `import type` to avoid bundling runtime code for types-only imports
4. **Advanced components**: Test with actual peer dependencies installed - they won't error until used
5. **Bundle size**: `react` and `react-native` are external, not bundled (peer dependencies)
6. **Example app linking**: During development, link local library with `npm install ../../`. Before testing published version, reinstall from npm with `npm install react-native-atomic-ui@latest`
