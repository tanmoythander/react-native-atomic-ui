# Repository Guidelines

## Project Structure & Module Organization
- `src/` is the library source. Core components live in `src/components/` (with `layouts/`, `inputs/`, `display/`, `typography/`).
- Theming and types are in `src/theme/` and `src/types/`, with utilities in `src/utilities/`.
- Tests are co-located in `src/**/__tests__/` and snapshots in `src/components/__tests__/`.
- `examples/` contains the demo app (`examples/app/`) and a usage example file.
- `dist/` is generated build output. `assets/fonts/` holds font assets.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run build`: compile TypeScript and bundle to `dist/`.
- `npm run build:watch`: watch TypeScript compilation.
- `npm test`: run Jest unit tests.
- `npm run test:coverage`: run tests with coverage report in `coverage/`.
- `npm run lint`: run ESLint on `src/`.
- `npm run format`: run Prettier on `src/**/*.{ts,tsx}`.

## Coding Style & Naming Conventions
- TypeScript with strict compiler options; React Native JSX.
- Formatting is enforced by Prettier: 2-space indentation, semicolons, single quotes, trailing commas (ES5), 100-char print width.
- ESLint enforces JSX prop braces and React Native lint rules.
- Components use `PascalCase.tsx`; tests are `Component.test.tsx`.
- Prefer path aliases from `tsconfig.json`, e.g. `@components/Button` or `@theme/index`.

## Testing Guidelines
- Test stack: Jest, `@testing-library/react-native`, `@testing-library/jest-native`, `ts-jest`.
- Coverage thresholds: branches 70%, functions 75%, lines 80%, statements 80%.
- Wrap components using `useTheme()` with `<ThemeProvider>` in tests.

## Commit & Pull Request Guidelines
- Commits follow conventional prefixes seen in history: `feat:`, `fix:`, `docs:`, `style:`, `chore:`, `refactor:`. Version bumps sometimes use bare versions like `1.0.4`.
- PRs should include a short summary, tests run, and screenshots or screen recordings for UI changes. Link related issues and update `README.md` or `CHANGELOG.md` when user-facing behavior changes.
