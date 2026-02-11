# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of react-native-atomic-ui v1.0.0
- 30+ core UI components (zero external dependencies)
- Context-based theme system with light/dark mode support
- System preference detection for automatic theme selection
- Full TypeScript support with strict mode
- Comprehensive documentation and examples

### Changed
- Initial release

### Deprecated
- None

### Removed
- None

### Fixed
- None

### Security
- None

---

## [1.0.0] - 2026-01-31

### Initial Release

The first stable release of react-native-atomic-ui, a zero-dependency React Native UI component library featuring:

#### Core Components
- Layout: Box, Row, Column, Collapsible
- Typography: Text + 15 variants (H1-H6, Body1-6, SubTitle, Caption, Overline)
- Inputs: Button, Input variants, RadioButton, CheckBox
- Display: ScaledImage, PaginatedFlatList, PasswordReport, ShowMoreText, HorizontalProgressBar

#### Features
- ✅ Zero external dependencies in core library
- ✅ Theme system with Context API
- ✅ Automatic dark/light mode with system preference detection
- ✅ Full TypeScript support
- ✅ 80%+ test coverage
- ✅ iOS 12.0+ and Android 6.0+ support
- ✅ React Native 0.73.0+ compatibility

#### Documentation
- Comprehensive README with quick start guide
- API reference for all components
- Setup guides for iOS and Android
- Theming customization guide
- Migration guide
- Testing instructions
- Contributing guidelines

---

## Version History

### 1.0.0
- Initial public release

---

## Upgrade Guides

### From v0.x to v1.0

v1.0 introduces major improvements and some breaking changes:

#### Breaking Changes
1. **Theme Structure**: Color names updated to be more descriptive
   - Before: `colors.bg` → After: `colors.background`
   - Before: `colors.txt` → After: `colors.text`

2. **Component Props**: Prop names standardized
   - Button: `onPressHandler` → `onPress`
   - Input: `changeHandler` → `onChangeText`

3. **Removed APIs**:
   - `useThemeWithRedux` hook (use `useTheme` with app's Redux store)
   - Inline theme customization (use `<ThemeProvider theme={customTheme}>`)

#### Migration Path

1. Update color references:
   ```typescript
   // Before
   const color = theme.colors.bg;

   // After
   const color = theme.colors.background;
   ```

2. Update component props:
   ```typescript
   // Before
   <Button onPressHandler={handlePress} />

   // After
   <Button onPress={handlePress} />
   ```

3. Update imports:
   ```typescript
   // Before (if using Redux)
   import { useThemeWithRedux } from 'react-native-atomic-ui';
   const { theme } = useThemeWithRedux();

   // After (use app's Redux)
   import { useTheme } from 'react-native-atomic-ui';
   const { theme } = useTheme();
   ```

---

## Installation

```bash
npm install react-native-atomic-ui
```

## Links

- [GitHub](https://github.com/your-org/react-native-atomic-ui)
- [npm](https://www.npmjs.com/package/react-native-atomic-ui)
- [Documentation](https://github.com/your-org/react-native-atomic-ui#readme)

---

**Last Updated**: January 31, 2026
