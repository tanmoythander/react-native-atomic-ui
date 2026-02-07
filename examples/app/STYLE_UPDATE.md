# Style Update - Example App

## Changes Made

The example app has been updated to follow the new code style enforced in the library:

### 1. ESLint Configuration (.eslintrc.js)
Added rule to enforce curly braces for string props:
```javascript
rules: {
  'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
}
```

### 2. Prettier Configuration (.prettierrc.js)
Added `jsxSingleQuote: true` to use single quotes in JSX.

### 3. VSCode Settings (.vscode/settings.json)
Added workspace settings for auto-format on save.

### 4. App.tsx
All string props now use curly braces:
- `defaultTheme={'system'}` instead of `defaultTheme="system"`
- `variant={'primary'}` instead of `variant="primary"`
- `padding={'lg'}` instead of `padding="lg"`

## How to Use

When editing code in VSCode:
1. Install recommended extensions (Prettier, ESLint)
2. Save file - auto-formats according to rules
3. Run `npm run lint` to check for violations

## Before
```tsx
<Button variant="primary" size="large" />
<Box padding="lg" borderRadius="md" />
```

## After
```tsx
<Button variant={'primary'} size={'large'} />
<Box padding={'lg'} borderRadius={'md'} />
```

This ensures consistency with the library's code style.
