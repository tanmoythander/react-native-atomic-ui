# Testing Instructions for @react-native-atomic-ui/core

## Table of Contents

1. [Testing Environment Setup](#testing-environment-setup)
2. [Unit Testing](#unit-testing)
3. [Manual Testing](#manual-testing)
4. [Platform-Specific Testing](#platform-specific-testing)
5. [Edge Cases & Error Scenarios](#edge-cases--error-scenarios)
6. [Integration Testing](#integration-testing)
7. [Performance Testing](#performance-testing)
8. [Pre-Release Verification](#pre-release-verification)

---

## Testing Environment Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0 or yarn >= 1.22.0
- React Native CLI: `npm install -g react-native-cli`
- Xcode 14+ (for iOS testing)
- Android Studio 4.2+ (for Android testing)

### Initial Setup

```bash
# Install dependencies
npm install

# Install Pods (iOS)
cd ios && pod install && cd ..

# Verify installation
npm run build

# Run test suite
npm test
```

---

## Unit Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage report
npm test:coverage

# Run specific test file
npm test -- Button.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="theme"
```

### Test Coverage Target

**Minimum**: 80% line coverage for core components

**Components to Test**:
- ✅ Layout components (Box, Row, Column)
- ✅ Typography components (Text, H1-H6, Body variants)
- ✅ Input components (Button, Input variants)
- ✅ Theme system (ThemeProvider, useTheme hook)
- ✅ Utilities (math helpers, type functions)

### Example Test Structure

```typescript
// src/components/__tests__/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider, Button } from '../../index';

describe('Button Component', () => {
  it('renders with label', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button label="Click Me" onPress={() => {}} />
      </ThemeProvider>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <Button testID="btn" label="Press" onPress={onPress} />
      </ThemeProvider>
    );
    fireEvent.press(getByTestId('btn'));
    expect(onPress).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <Button
          testID="btn"
          label="Disabled"
          onPress={onPress}
          disabled={true}
        />
      </ThemeProvider>
    );
    fireEvent.press(getByTestId('btn'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Button
          testID="btn"
          label="Loading"
          onPress={() => {}}
          loading={true}
        />
      </ThemeProvider>
    );
    expect(getByTestId('btn')).toBeTruthy();
  });
});
```

### Test Checklist

- [ ] Renders without crashing
- [ ] Applies correct theme colors
- [ ] Responds to user interactions
- [ ] Handles edge cases (null values, undefined)
- [ ] Updates when props change
- [ ] Accessibility features (testID)
- [ ] TypeScript types are correct

---

## Manual Testing

### Theme Testing

**Light Mode**:
1. Launch app with device in light mode
2. Verify all components render with light theme colors
3. Verify text is readable
4. Verify button variants display correctly

**Dark Mode**:
1. Launch app with device in dark mode
2. Verify all components render with dark theme colors
3. Verify sufficient contrast for accessibility
4. Verify shadows are more prominent

**Theme Toggle**:
1. Render button that calls `toggleTheme()`
2. Press button to toggle between light/dark
3. Verify all components update colors
4. Verify theme persists during component remounts

### Component Testing Checklist

#### Layouts (Box, Row, Column)
- [ ] Renders children correctly
- [ ] Applies padding/margin from theme spacing
- [ ] Applies correct backgroundColor
- [ ] Applies correct borderRadius
- [ ] Respects custom styles
- [ ] Flex direction is correct (row/column)
- [ ] Gap between children is correct

#### Typography (Text, H1-H6, Body variants)
- [ ] Font size is correct for variant
- [ ] Font weight is correct
- [ ] Line height is correct
- [ ] Color respects theme
- [ ] Custom color overrides theme
- [ ] textAlign works correctly
- [ ] Text wraps correctly on narrow screens

#### Button
- [ ] Label displays correctly
- [ ] onPress handler is called
- [ ] Disabled state prevents interactions
- [ ] Loading state shows spinner
- [ ] All variants (primary, secondary, danger, ghost) display correctly
- [ ] All sizes (small, medium, large) display correctly
- [ ] Icon renders when provided

### Screen Recording Testing

Record manual tests on each platform:

```bash
# iOS - Open Xcode console and record screen
# Android - adb shell screenrecord /sdcard/test.mp4
```

Verify in recordings:
- UI elements render without glitches
- Colors are correct for light/dark mode
- Text is readable
- Buttons respond to taps
- Animations are smooth (if any)

---

## Platform-Specific Testing

### iOS Testing

**Environment**:
- Xcode 14+
- iOS 12.0 (minimum) simulator
- iOS latest simulator
- Physical device (optional)

**Testing Steps**:

1. **Build for iOS**:
   ```bash
   npm run build
   cd examples/ExampleApp
   npx react-native run-ios
   ```

2. **Test on iOS 12.0**:
   ```bash
   # In Xcode, select "iPhone 8" simulator (iOS 12.0)
   npx react-native run-ios --simulator "iPhone 8"
   ```

3. **Test on Latest iOS**:
   ```bash
   # Select latest simulator in Xcode
   npx react-native run-ios --simulator "iPhone 15 Pro Max"
   ```

4. **Physical Device Testing**:
   - Connect iPhone to Mac
   - Select device in Xcode
   - Build and run on device
   - Test all features
   - Verify performance

**iOS-Specific Checks**:
- [ ] Fonts render correctly (custom fonts)
- [ ] Safe area insets respected
- [ ] StatusBar color matches theme
- [ ] WKWebView (if used) loads correctly
- [ ] Performance is smooth on older devices

### Android Testing

**Environment**:
- Android Studio 4.2+
- Android API 23 (minimum) emulator
- Android API 34+ emulator
- Physical device (optional)

**Testing Steps**:

1. **Build for Android**:
   ```bash
   npm run build
   cd examples/ExampleApp
   npx react-native run-android
   ```

2. **Test on API 23**:
   ```bash
   # Create/select API 23 emulator
   npx react-native run-android --deviceId emulator-5554
   ```

3. **Test on Latest Android**:
   ```bash
   # Create/select API 34+ emulator
   npx react-native run-android --deviceId emulator-5556
   ```

4. **Physical Device Testing**:
   - Enable USB debugging
   - Connect device via USB
   - Verify device is recognized: `adb devices`
   - Build and run on device

**Android-Specific Checks**:
- [ ] Fonts render correctly
- [ ] StatusBar color matches theme
- [ ] Keyboard doesn't overlap input
- [ ] Back button behavior is correct
- [ ] Performance is smooth on older devices
- [ ] RTL layout works (if supported)

---

## Edge Cases & Error Scenarios

### Theme Edge Cases

```typescript
// Test 1: useTheme without ThemeProvider
it('throws error when useTheme used outside ThemeProvider', () => {
  expect(() => {
    render(<ComponentUsingTheme />);
  }).toThrow('useTheme must be used within a ThemeProvider');
});

// Test 2: Rapid theme toggles
it('handles rapid theme toggles', () => {
  const { rerender } = render(
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
  for (let i = 0; i < 100; i++) {
    toggleTheme();
  }
  // Verify final state is correct
});

// Test 3: Theme with null/undefined values
it('handles undefined colors gracefully', () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Box backgroundColor={undefined} />
    </ThemeProvider>
  );
  expect(getByTestId('box')).toBeTruthy();
});
```

### Component Edge Cases

```typescript
// Long text
it('handles very long text', () => {
  const longText = 'A'.repeat(1000);
  const { getByText } = render(
    <ThemeProvider>
      <Text>{longText}</Text>
    </ThemeProvider>
  );
  expect(getByText(longText)).toBeTruthy();
});

// Empty children
it('renders with empty children', () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Box testID="box" />
    </ThemeProvider>
  );
  expect(getByTestId('box')).toBeTruthy();
});

// Large spacing values
it('handles all spacing sizes', () => {
  const spacings = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
  spacings.forEach((spacing) => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box testID={`box-${spacing}`} padding={spacing} />
      </ThemeProvider>
    );
    expect(getByTestId(`box-${spacing}`)).toBeTruthy();
  });
});
```

### Error Boundary Testing

```typescript
it('provides helpful error messages', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  
  render(<ComponentWithoutThemeProvider />);
  
  expect(consoleErrorSpy).toHaveBeenCalledWith(
    expect.stringContaining('useTheme must be used within ThemeProvider')
  );
  
  consoleErrorSpy.mockRestore();
});
```

---

## Integration Testing

### Example App Testing

Create an example app demonstrating all components:

```typescript
// examples/App.tsx
import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import {
  ThemeProvider,
  useTheme,
  Box,
  Column,
  Row,
  Button,
  H1,
  Body1,
} from '@react-native-atomic-ui/core';

export function AppExample() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView>
        <Box padding="lg">
          <H1>Atomic UI Components</H1>
          <Body1>All core components in one place</Body1>

          <Button
            label={isDark ? '☀️ Light' : '🌙 Dark'}
            onPress={toggleTheme}
            style={{ marginVertical: theme.spacing.lg }}
          />

          {/* Add all component examples */}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <AppExample />
    </ThemeProvider>
  );
}
```

### Integration Test Steps

1. **Build example app**:
   ```bash
   npm run build
   cd examples && npm install
   ```

2. **Run on iOS**:
   ```bash
   npx react-native run-ios --project-path examples
   ```

3. **Run on Android**:
   ```bash
   npx react-native run-android --project-path examples
   ```

4. **Verify**:
   - [ ] All components render
   - [ ] Theme toggle works
   - [ ] Navigation works
   - [ ] No console errors
   - [ ] Performance is acceptable

---

## Performance Testing

### Bundle Size

```bash
# Measure core library size
npm run build
du -h dist/index.mjs

# Expected: ~50-80 KB minified
```

### Render Performance

```typescript
it('renders 100 components quickly', () => {
  const start = performance.now();

  const { getByTestId } = render(
    <ThemeProvider>
      <Column>
        {Array.from({ length: 100 }).map((_, i) => (
          <Box key={i} testID={`box-${i}`}>
            <Button label={`Button ${i}`} onPress={() => {}} />
          </Box>
        ))}
      </Column>
    </ThemeProvider>
  );

  const end = performance.now();
  const renderTime = end - start;

  expect(renderTime).toBeLessThan(1000); // Less than 1 second
  expect(getByTestId('box-0')).toBeTruthy();
});
```

### Memory Leaks

```bash
# Test with React DevTools Profiler
# Record theme toggle operations
# Verify no memory growth over time
```

---

## Pre-Release Verification

### Checklist Before Publishing

- [ ] All unit tests passing (80%+ coverage)
- [ ] All integration tests passing
- [ ] iOS testing completed (12.0 + latest)
- [ ] Android testing completed (API 23 + latest)
- [ ] Bundle size acceptable (~50-80 KB)
- [ ] No console warnings or errors
- [ ] TypeScript types correct
- [ ] README examples work
- [ ] All components documented
- [ ] No circular dependencies
- [ ] Peer dependencies correctly specified
- [ ] Optional dependencies clearly marked
- [ ] package.json version bumped
- [ ] CHANGELOG.md updated
- [ ] Git tags created

### Publishing

```bash
# Verify build
npm run build

# Run full test suite
npm test

# Check bundle
npm run build:bundle

# Publish to npm
npm publish

# Verify on npm
npm view @react-native-atomic-ui/core
```

---

## Continuous Integration

### GitHub Actions Workflow

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm run lint
      - run: npm test -- --coverage
      - run: npm run build
      - uses: codecov/codecov-action@v2
```

---

## Support & Debugging

### Enable Debug Logging

```typescript
// Enable in development
if (__DEV__) {
  // Component will log render counts
}
```

### Common Issues

**Issue**: Theme colors not applying
**Solution**: Ensure ThemeProvider wraps components

**Issue**: TypeScript errors
**Solution**: Run `npm run build:types`

**Issue**: Performance slow
**Solution**: Check for unnecessary re-renders using React Profiler

### Getting Help

- Check [README.md](../README.md) for common issues
- Review test files for usage examples
- Open issue on GitHub with reproduction steps

---

**Last Updated**: January 2026  
**Test Framework**: Jest + React Testing Library  
**Coverage Target**: 80%+
