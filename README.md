# react-native-atomic-ui

**A zero-dependency atomic UI component library for React Native with built-in dark mode support.**

## ✨ Features

- ✅ **30+ Core Components** - Ready-to-use UI building blocks with zero external dependencies
- ✅ **TypeScript First** - Full type definitions, strict mode enabled
- ✅ **Dark Mode Built-in** - Light/dark themes with system preference detection
- ✅ **Context-Based Theme** - Pure React Context (Redux optional for advanced use cases)
- ✅ **Small Bundle** - ~50-80 KB minified core library
- ✅ **Modular Architecture** - Import only what you need
- ✅ **Advanced Components** - Optional peer dependencies for date pickers, rich text, file selection
- ✅ **Platform Support** - iOS 12.0+, Android 6.0+
- ✅ **React Native 0.73.0+** - Broad ecosystem compatibility

## 📦 Core Components (Zero Dependencies)

### Layout Components
- `Box` - Flexible container with theme-aware spacing
- `Row` - Horizontal flex container
- `Column` - Vertical flex container
- `Collapsible` - Expandable/collapsible sections

### Typography Components
- `Text` - Base text component with theme variants
- `H1`, `H2`, `H3`, `H4`, `H5`, `H6` - Heading levels
- `Body1` - `Body6` - Body text variants
- `SubTitle1`, `SubTitle2` - Subtitle components
- `Caption`, `Overline` - Small text variants

### Input Components
- `Button` - Multi-variant buttons (primary, secondary, danger, ghost)
- `Input` - Text input with theme support
- `FloatingInput` - Floating label text input
- `BorderedInput` - Bordered text input variant
- `InputNumber` - Numeric input with validation
- `RadioButton` / `RadioGroup` - Radio selection
- `CheckBox` - Checkbox component
- `CheckBoxMultiPicker` - Multi-select checkboxes

### Display Components
- `ScaledImage` - Responsive image container
- `PaginatedFlatList` - Lazy-loaded list with pagination
- `PasswordReport` - Password strength indicator
- `ShowMoreText` - Expandable text display
- `HorizontalProgressBar` - Progress bar component

## 🚀 Installation

### Basic Setup

```bash
npm install react-native-atomic-ui react-native
# or
yarn add react-native-atomic-ui react-native
```

## 📱 Example App

Want to see all components in action? Check out our comprehensive showcase app:

👉 **[AtomicUIApp Example](examples/app/)** - A complete React Native app demonstrating all components, themes, and features.

To run the example app:
```bash
cd examples/app
npm install
cd ios && pod install && cd ..
npx react-native run-ios  # or run-android
```

### With Optional Components

```bash
# For date picker
npm install @react-native-community/datetimepicker

# For dropdown pickers
npm install react-native-picker-select

# For file selection
npm install @react-native-documents/picker

# For rich text display
npm install react-native-webview

# For advanced features
npm install react-native-shimmer-placeholder
npm install @react-native-community/netinfo
```

## 🔧 Quick Start

### Setup Theme Provider

Wrap your app with `ThemeProvider` at the root level:

```typescript
import React from 'react';
import { ThemeProvider } from 'react-native-atomic-ui';
import { App } from './App';

export function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

### Using Components

```typescript
import React from 'react';
import {
  Box,
  Column,
  Button,
  H1,
  Body1,
  useTheme,
} from 'react-native-atomic-ui';

export function MyScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <Box padding="lg" backgroundColor={theme.colors.background}>
      <Column gap="md">
        <H1>Welcome to Atomic UI</H1>
        <Body1>This is a beautiful, themeable UI library.</Body1>

        <Button
          label={isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          onPress={toggleTheme}
          variant="primary"
          size="large"
        />
      </Column>
    </Box>
  );
}
```

## 🎨 Theme & Customization

### Light/Dark Modes

The library automatically detects system color scheme and provides both light and dark themes:

```typescript
import { useTheme } from 'react-native-atomic-ui';

export function ThemedComponent() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <Box backgroundColor={theme.colors.background}>
      {/* Your content */}
      <Button
        label="Toggle Theme"
        onPress={toggleTheme}
      />
    </Box>
  );
}
```

### Accessing Theme Colors

```typescript
const { theme } = useTheme();

// Primary colors
theme.colors.primary      // Main brand color
theme.colors.secondary    // Secondary brand color
theme.colors.error        // Error/danger red
theme.colors.success      // Success green
theme.colors.warning      // Warning orange

// Neutral colors
theme.colors.background   // Page background
theme.colors.surface      // Surface elements
theme.colors.text         // Primary text
theme.colors.textSecondary // Secondary text
theme.colors.border       // Borders

// And many more...
```

### Spacing System

The theme includes a consistent spacing scale:

```typescript
const { theme } = useTheme();

theme.spacing.xs   // 4px
theme.spacing.sm   // 8px
theme.spacing.md   // 16px
theme.spacing.lg   // 24px
theme.spacing.xl   // 32px
theme.spacing.xxl  // 48px
```

### Typography

Use named variants for consistent typography:

```typescript
import { H1, Body1, Caption, Text, useTheme } from 'react-native-atomic-ui';

export function TypographyExample() {
  const { theme } = useTheme();

  return (
    <Column gap="md">
      <H1>Heading 1 - 48px</H1>
      <Body1>Body text - 16px</Body1>
      <Caption>Caption - 12px</Caption>
      <Text variant="subtitle1">Custom variant</Text>
      <Text
        variant="body2"
        color={theme.colors.textSecondary}
      >
        Custom color
      </Text>
    </Column>
  );
}
```

## 📚 Component API Reference

### Box

Flexible container component for layout.

```typescript
interface BoxProps {
  children?: React.ReactNode;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingHorizontal?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingVertical?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  marginHorizontal?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  marginVertical?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  backgroundColor?: string;
  borderRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  style?: any;
  testID?: string;
}
```

### Button

Interactive button component with multiple variants.

```typescript
interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: any;
  testID?: string;
}
```

**Variants:**
- `primary` - Primary action button (default)
- `secondary` - Secondary action button
- `danger` - Destructive action button
- `ghost` - Transparent button with border

**Sizes:**
- `small` - 32px height
- `medium` - 48px height (default)
- `large` - 56px height

### Text

Base text component with theme-aware typography.

```typescript
interface TextProps {
  children?: React.ReactNode;
  variant?: 'h1' | 'h2' | ... | 'body1' | 'body2' | ... | 'caption' | 'overline';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: any;
  testID?: string;
}
```

### Row & Column

Flex container components for layout.

```typescript
// Row = flexDirection: 'row' with centered items
<Row gap="md" padding="lg">
  {/* Horizontal layout */}
</Row>

// Column = flexDirection: 'column'
<Column gap="md" padding="lg">
  {/* Vertical layout */}
</Column>
```

## 🔗 Advanced Components

Advanced components require specific peer dependencies. Import them from submodules:

### Date Picker

```typescript
import { DatePickerInput } from 'react-native-atomic-ui/date-picker';

// Requires: npm install @react-native-community/datetimepicker

<DatePickerInput
  value={date}
  onChange={setDate}
  label="Select Date"
  format="DD/MM/YYYY"
/>
```

### Pickers

```typescript
import { BorderedPickerInput } from 'react-native-atomic-ui/picker';

// Requires: npm install react-native-picker-select

<BorderedPickerInput
  value={selectedValue}
  onValueChange={setSelectedValue}
  items={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  label="Select an option"
/>
```

### File Picker

```typescript
import { FilePicker } from 'react-native-atomic-ui/file-picker';

// Requires: npm install @react-native-documents/picker

<FilePicker
  onFileSelected={handleFileSelected}
  label="Choose File"
/>
```

### Rich Text

```typescript
import { RichText, RichTextInput } from 'react-native-atomic-ui/rich-text';

// Requires: npm install react-native-webview
// For editor: npm install github:starburst997/10tap-editor#jd

<RichText
  html="<p>This is <strong>rich</strong> text</p>"
  onLinkPress={(url) => Linking.openURL(url)}
/>
```

## 🛠️ TypeScript Support

Full TypeScript support with strict mode enabled:

```typescript
import {
  Box,
  Button,
  Theme,
  ThemeContextValue,
  BoxProps,
  ButtonProps,
} from 'react-native-atomic-ui';

// All components are fully typed
const myComponent: React.FC<BoxProps> = (props) => {
  return <Box {...props} />;
};
```

## 📱 Platform Support

| Platform | Min Version | Support |
|----------|-------------|---------|
| iOS | 12.0 | ✅ Full support |
| Android | 6.0 (API 23) | ✅ Full support |
| React Native | 0.73.0 | ✅ Full support |

## ⚙️ Configuration

### Theme Provider Options

```typescript
<ThemeProvider defaultTheme="system">
  {/* 'system' = use device preference (default) */}
  {/* 'light' = force light theme */}
  {/* 'dark' = force dark theme */}
  <App />
</ThemeProvider>
```

## 🐛 Troubleshooting

### "useTheme must be used within ThemeProvider"

Make sure your app is wrapped with `ThemeProvider`:

```typescript
import { ThemeProvider } from 'react-native-atomic-ui';

export function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

### TypeScript Errors

Ensure `jsx: 'react-native'` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-native"
  }
}
```

### Font Issues on iOS

If custom fonts aren't loading, ensure they're linked in Info.plist:

```xml
<key>UIAppFonts</key>
<array>
  <string>Poppins-Regular.ttf</string>
  <string>Poppins-Medium.ttf</string>
  <string>Poppins-SemiBold.ttf</string>
  <string>Poppins-Bold.ttf</string>
</array>
```

## 🆙 Upgrading

### From 0.x to 1.0

Version 1.0 introduces breaking changes:

- Theme structure updated with new color names
- `useThemeWithRedux` hook removed (use `useTheme` with Redux context)
- Component prop names standardized

See [CHANGELOG.md](./CHANGELOG.md) for details.

## 📄 License

MIT © React Native Atomic UI Team

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📖 Documentation

- [Component API](./docs/COMPONENTS_API.md)
- [Setup Guide](./docs/SETUP_GUIDE.md)
- [Theming Guide](./docs/THEMING_GUIDE.md)
- [Testing Instructions](./TESTING_INSTRUCTIONS.md)
- [Architecture](./docs/ARCHITECTURE.md)

## 🔗 Links

- [GitHub Repository](https://github.com/your-org/react-native-atomic-ui)
- [npm Package](https://www.npmjs.com/package/react-native-atomic-ui)
- [Issue Tracker](https://github.com/your-org/react-native-atomic-ui/issues)
