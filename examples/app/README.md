# AtomicUIApp - React Native Atomic UI Showcase

This is a showcase application that demonstrates all the core UI components from the **react-native-atomic-ui** library.

## 📱 About This App

AtomicUIApp is a comprehensive example that showcases:
- ✅ **Typography** - H1-H3, Body1-2, Caption variants
- ✅ **Buttons** - All variants (Primary, Secondary, Danger, Ghost), sizes, and states
- ✅ **Inputs** - Text Input, Email, Password, Multiline with validation
- ✅ **Selection** - CheckBox, RadioButton, Switch components
- ✅ **Display** - ProgressBar, Badge (variants & sizes), Divider
- ✅ **Layout** - Box, Row, Column, Collapsible components
- ✅ **Theme** - Light/Dark mode toggle with system preference
- ✅ **Spacing** - All variants (xs, sm, md, lg, xl, xxl)
- ✅ **Colors** - Full theme color palette showcase

## 🚀 Getting Started

### Prerequisites

Ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step.

**Required:**
- Node.js >= 18.0.0
- npm >= 8.0.0
- React Native development environment (Xcode for iOS, Android Studio for Android)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install CocoaPods (iOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### For iOS
```bash
npx react-native run-ios
```

Or open `ios/AtomicUIApp.xcworkspace` in Xcode and press Run.

#### For Android
```bash
npx react-native run-android
```

Make sure you have an Android emulator running or a device connected.

## 📦 What's Inside

This app demonstrates the following components from **react-native-atomic-ui**:

### Typography Components
```typescript
import { H1, H2, H3, Body1, Body2, Caption } from 'react-native-atomic-ui';
```

### Button Components
```typescript
import { Button } from 'react-native-atomic-ui';

// Variants: 'primary' | 'secondary' | 'danger' | 'ghost'
// Sizes: 'small' | 'medium' | 'large'
// States: disabled, loading
```

### Layout Components
```typescript
import { Box, Row, Column } from 'react-native-atomic-ui';

// Box - Flexible container with theme-aware spacing
// Row - Horizontal flex container
// Column - Vertical flex container
```

### Theme System
```typescript
import { ThemeProvider, useTheme } from 'react-native-atomic-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}

function YourApp() {
  const { theme, isDark, toggleTheme } = useTheme();
  // Use theme values and toggle between light/dark modes
}
```

## 🎨 Features Demonstrated

1. **Theme Toggle**
   - Switch between light and dark modes
   - System preference detection
   - Automatic theme application

2. **Typography Hierarchy**
   - Different heading levels (H1, H2, H3)
   - Body text variants
   - Caption and small text

3. **Interactive Buttons**
   - All button variants with alerts
   - Different sizes
   - Loading and disabled states

4. **Layout Patterns**
   - Horizontal rows with gap spacing
   - Vertical columns with gap spacing
   - Nested layouts

5. **Spacing System**
   - Padding variants (xs, sm, md, lg, xl, xxl)
   - Margin variants
   - Gap spacing between children

6. **Border Radius**
   - Different radius sizes (xs, sm, md, lg, full)

7. **Color System**
   - Primary, Secondary colors
   - Success, Error, Warning, Info colors
   - Semantic color usage

## 🔧 Customization

### Modify the Theme

The app uses the default light and dark themes from the library. To customize:

```typescript
import { ThemeProvider, lightTheme, darkTheme } from 'react-native-atomic-ui';

const customLightTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#FF6B6B', // Your custom primary color
  },
};

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Add More Components

To explore more components, check the [react-native-atomic-ui documentation](https://github.com/tanmoythander/react-native-atomic-ui).

## 📚 Learn More

- [react-native-atomic-ui](https://www.npmjs.com/package/react-native-atomic-ui) - The UI component library
- [React Native Documentation](https://reactnative.dev/) - Learn about React Native
- [React Documentation](https://react.dev/) - Learn about React

## 🐛 Troubleshooting

### Metro Bundler Issues
```bash
npx react-native start --reset-cache
```

### iOS Build Issues
```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

### Android Build Issues
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

### TypeScript Errors
```bash
npm install --save-dev @types/react @types/react-native
```

## 📄 License

This example app is part of the react-native-atomic-ui project and follows the same MIT license.

## �� Contributing

This is an example application. For contributions to the library itself, visit:
https://github.com/tanmoythander/react-native-atomic-ui

## ✨ Credits

Built with [react-native-atomic-ui](https://www.npmjs.com/package/react-native-atomic-ui)

---

**Version:** 1.0.0  
**React Native:** 0.83.1  
**react-native-atomic-ui:** 1.0.0
