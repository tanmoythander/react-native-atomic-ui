# Testing Guide for react-native-atomic-ui

This document provides comprehensive information about testing the react-native-atomic-ui library.

## Table of Contents

- [Testing Setup](#testing-setup)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Writing Tests](#writing-tests)
- [Test Coverage](#test-coverage)
- [Continuous Integration](#continuous-integration)
- [Troubleshooting](#troubleshooting)

---

## Testing Setup

### Testing Stack

The library uses the following testing tools:

- **Jest** - JavaScript testing framework
- **React Testing Library** (@testing-library/react-native) - Component testing utilities
- **Jest Native** (@testing-library/jest-native) - Custom matchers for React Native
- **ts-jest** - TypeScript preprocessor for Jest

### Installation

All testing dependencies are already included in `devDependencies`. If you need to install them manually:

```bash
npm install --save-dev jest ts-jest @testing-library/react-native @testing-library/jest-native
```

### Configuration Files

#### `jest.config.js`

Main Jest configuration file with:
- TypeScript transformation setup
- Module path mapping
- Coverage thresholds
- Test path ignores

#### `jest.setup.js`

Jest setup file that:
- Extends Jest with React Native Testing Library matchers
- Configures console mocking for cleaner test output

#### `__mocks__/react-native.js`

Mock file for React Native components to enable testing in Node environment.

---

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run specific test file
npm test -- Button.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="Button"
```

### Test Scripts

The following scripts are defined in `package.json`:

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

---

## Test Structure

### Directory Organization

Tests are co-located with their components:

```
src/
├── components/
│   ├── __tests__/
│   │   └── snapshots.test.tsx      # Snapshot tests for all components
│   ├── layouts/
│   │   ├── __tests__/
│   │   │   ├── Box.test.tsx
│   │   │   └── Collapsible.test.tsx
│   │   ├── Box.tsx
│   │   └── Collapsible.tsx
│   ├── inputs/
│   │   ├── __tests__/
│   │   │   ├── Button.test.tsx
│   │   │   ├── Input.test.tsx
│   │   │   ├── CheckBox.test.tsx
│   │   │   ├── RadioButton.test.tsx
│   │   │   └── Switch.test.tsx
│   │   ├── Button.tsx
│   │   └── ...
│   ├── display/
│   │   ├── __tests__/
│   │   │   ├── Badge.test.tsx
│   │   │   ├── Divider.test.tsx
│   │   │   └── ProgressBar.test.tsx
│   │   └── ...
│   └── typography/
│       ├── __tests__/
│       │   └── Text.test.tsx
│       └── Text.tsx
└── theme/
    └── __tests__/
        └── theme.test.tsx
```

### Test File Naming

- Test files are named `*.test.tsx` or `*.test.ts`
- Test filename should match the component filename
- Example: `Button.tsx` → `Button.test.tsx`

---

## Writing Tests

### Basic Test Template

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { YourComponent } from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <YourComponent />
      </ThemeProvider>
    );

    expect(getByText('Expected Text')).toBeTruthy();
  });

  it('handles user interaction', () => {
    const mockHandler = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <YourComponent onPress={mockHandler} testID={'component'} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('component'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Best Practices

#### 1. Wrap Components with ThemeProvider

All components using `useTheme()` must be wrapped:

```typescript
render(
  <ThemeProvider>
    <YourComponent />
  </ThemeProvider>
);
```

#### 2. Use testID for Reliable Queries

```typescript
// Component
<Box testID={'myBox'}>Content</Box>

// Test
const { getByTestId } = render(...);
expect(getByTestId('myBox')).toBeTruthy();
```

#### 3. Test User Interactions

```typescript
// Test button press
fireEvent.press(getByText('Click Me'));

// Test text input
fireEvent.changeText(getByTestId('input'), 'New Value');

// Test value change
fireEvent(getByTestId('checkbox'), 'onValueChange', true);
```

#### 4. Test Props and Variants

```typescript
it('renders with different variants', () => {
  const variants = ['primary', 'secondary', 'danger'];
  
  variants.forEach((variant) => {
    const { getByText } = render(
      <ThemeProvider>
        <Button variant={variant} label={variant} onPress={() => {}} />
      </ThemeProvider>
    );
    
    expect(getByText(variant)).toBeTruthy();
  });
});
```

#### 5. Test Accessibility

```typescript
it('has correct accessibility props', () => {
  const { getByLabelText } = render(
    <ThemeProvider>
      <Button label={'Submit'} accessibilityLabel={'Submit form'} />
    </ThemeProvider>
  );
  
  expect(getByLabelText('Submit form')).toBeTruthy();
});
```

#### 6. Test Edge Cases

```typescript
it('handles disabled state', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <ThemeProvider>
      <Button label={'Click'} onPress={onPressMock} disabled={true} />
    </ThemeProvider>
  );
  
  fireEvent.press(getByText('Click'));
  expect(onPressMock).not.toHaveBeenCalled();
});
```

### Common Testing Utilities

#### Queries

- `getByText('text')` - Find by text content
- `getByTestId('id')` - Find by testID prop
- `getByPlaceholderText('placeholder')` - Find input by placeholder
- `getByDisplayValue('value')` - Find input by current value
- `queryByText('text')` - Same as getBy but returns null instead of throwing

#### Actions

- `fireEvent.press(element)` - Simulate press/touch
- `fireEvent.changeText(element, 'text')` - Simulate text input
- `fireEvent(element, 'eventName', data)` - Generic event

#### Assertions

```typescript
expect(element).toBeTruthy();
expect(element).toBeNull();
expect(element.props.disabled).toBe(true);
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveBeenCalledWith('value');
```

---

## Snapshot Tests

Snapshot tests ensure consistent UI rendering across changes. They are located in `src/components/__tests__/snapshots.test.tsx` and cover all components.

### Running Snapshot Tests

```bash
# Run snapshot tests
npm test -- snapshots.test.tsx

# Update snapshots after intentional changes
npm test -- -u
```

### What Snapshot Tests Cover

- Layout components (Box, Row, Column, Collapsible)
- Input components (Button, Input, CheckBox, RadioButton, Switch)
- Display components (Badge, Divider, ProgressBar)
- Typography components (Text, H1-H3, Body1-2, SubTitle1, Caption, Overline)

### When to Update Snapshots

Update snapshots when you intentionally change a component's rendered output (e.g., style changes, structural changes). Always review snapshot diffs to verify changes are expected.

---

## Test Coverage

### Coverage Requirements

The project enforces minimum coverage thresholds:

```javascript
coverageThreshold: {
  global: {
    branches: 70,
    functions: 75,
    lines: 80,
    statements: 80,
  },
}
```

### Generating Coverage Reports

```bash
npm run test:coverage
```

This generates:
- Terminal coverage summary
- HTML report in `coverage/` directory
- LCOV report for CI/CD integration

### Viewing Coverage

Open `coverage/lcov-report/index.html` in a browser to see detailed coverage by file.

### Excluded from Coverage

The following are excluded from coverage requirements:

- Type definition files (`*.d.ts`)
- Index/barrel files (`index.ts`)
- Test files themselves (`__tests__/**`)

---

## Continuous Integration

### Pre-publish Testing

Tests automatically run before publishing:

```json
{
  "prepublishOnly": "npm run clean && npm run build && npm run test -- --passWithNoTests"
}
```

### GitHub Actions (Recommended Setup)

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.x'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linter
        run: npm run lint
        
      - name: Run tests
        run: npm test -- --coverage
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

---

## Troubleshooting

### Common Issues

#### 1. "useTheme must be used within ThemeProvider"

**Problem**: Component uses `useTheme()` but test doesn't wrap with `<ThemeProvider>`

**Solution**:
```typescript
render(
  <ThemeProvider>
    <YourComponent />
  </ThemeProvider>
);
```

#### 2. "Element type is invalid"

**Problem**: React Native mock not properly configured

**Solution**: Ensure `__mocks__/react-native.js` exists and jest.config.js is properly set up.

#### 3. "Cannot find module"

**Problem**: Module path mapping not configured

**Solution**: Check that `moduleNameMapper` in `jest.config.js` matches your import aliases.

#### 4. "SyntaxError: Unexpected token"

**Problem**: JSX or TypeScript not being transformed

**Solution**: Ensure `ts-jest` is configured in jest.config.js:

```javascript
transform: {
  '^.+\\.(ts|tsx)$': ['ts-jest', {
    tsconfig: {
      jsx: 'react',
      esModuleInterop: true,
    },
  }],
},
```

#### 5. Tests Pass Locally but Fail in CI

**Problem**: Environment differences

**Solution**:
- Use `npm ci` instead of `npm install` in CI
- Ensure Node versions match
- Check for missing environment variables

### Debugging Tests

#### Run Single Test

```bash
npm test -- Button.test.tsx
```

#### Run with Verbose Output

```bash
npm test -- --verbose
```

#### Debug in VS Code

Add to `.vscode/launch.json`:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Jest Debug",
  "program": "${workspaceFolder}/node_modules/.bin/jest",
  "args": ["--runInBand", "--no-cache"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

---

## Test Examples by Component Type

### Layout Component Test Example

```typescript
describe('Box Component', () => {
  it('applies padding correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box padding={'lg'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      padding: 24,
    });
  });
});
```

### Input Component Test Example

```typescript
describe('Input Component', () => {
  it('calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={onChangeTextMock} testID={'input'} />
      </ThemeProvider>
    );

    fireEvent.changeText(getByTestId('input'), 'New Text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New Text');
  });
});
```

### Display Component Test Example

```typescript
describe('Badge Component', () => {
  it('renders with different variants', () => {
    const variants = ['primary', 'success', 'error'];
    
    variants.forEach((variant) => {
      const { getByText } = render(
        <ThemeProvider>
          <Badge variant={variant}>
            <Text>{variant}</Text>
          </Badge>
        </ThemeProvider>
      );
      
      expect(getByText(variant)).toBeTruthy();
    });
  });
});
```

---

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

## Contributing Tests

When contributing new components:

1. Create a test file in the component's `__tests__` directory
2. Test all props and variants
3. Test user interactions
4. Test edge cases (disabled, error states, etc.)
5. Ensure coverage thresholds are met
6. Run `npm run lint` to check code quality

Tests are a required part of every component contribution!
