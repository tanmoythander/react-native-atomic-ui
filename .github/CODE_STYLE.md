# Code Style Guide

This document outlines the code style conventions used in this project.

## 📋 General Rules

### String Props in JSX

**Always use curly braces for string prop values, with single quotes inside.**

✅ **Correct:**
```tsx
<Button variant={'primary'} size={'large'} />
<Box padding={'lg'} borderRadius={'md'} />
<Text variant={'h1'} color={theme.colors.primary} />
```

❌ **Incorrect:**
```tsx
<Button variant="primary" size="large" />
<Box padding="lg" borderRadius="md" />
```

**Rationale:** This provides visual consistency and makes it immediately clear which values are props vs. which might be JSX expressions. It also aligns with how non-string props are always written (e.g., `count={5}`, `onPress={handler}`).

### Quote Style

- **JavaScript/TypeScript:** Single quotes (`'`)
- **JSX Props:** Single quotes inside curly braces (`{'value'}`)
- **No double quotes** except in JSON files

✅ **Correct:**
```tsx
const name = 'John';
const greeting = `Hello, ${name}`;
<Button label={'Click me'} />
```

❌ **Incorrect:**
```tsx
const name = "John";
<Button label="Click me" />
```

### Children Content

**Children content (text between tags) does NOT need curly braces.**

✅ **Correct:**
```tsx
<H1>Welcome to Atomic UI</H1>
<Body1>This is some text</Body1>
<Button label={'Submit'}>Submit</Button>
```

❌ **Incorrect:**
```tsx
<H1>{'Welcome to Atomic UI'}</H1>
<Body1>{'This is some text'}</Body1>
```

## 🛠️ Automated Enforcement

### ESLint Configuration

The project uses ESLint rule `react/jsx-curly-brace-presence` to enforce this style:

```javascript
rules: {
  'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
}
```

### Prettier Configuration

The project uses these Prettier settings:

```json
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

### VSCode Integration

The repository includes `.vscode/settings.json` that:
- Formats code on save using Prettier
- Auto-fixes ESLint errors on save
- Ensures consistent formatting across the team

**To enable automatic formatting:**
1. Install VSCode extensions:
   - **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - **ESLint** (`dbaeumer.vscode-eslint`)
2. The workspace settings will automatically apply

## 📝 Other Style Conventions

### Semicolons
- **Always use semicolons** at the end of statements

### Arrow Functions
- **Always use parentheses** around arrow function parameters: `(x) => x + 1`

### Trailing Commas
- **Use trailing commas** in multi-line arrays, objects, and function parameters (ES5 style)

### Line Width
- Maximum **100 characters** per line

### Indentation
- **2 spaces** for indentation (no tabs)

## 🔍 Checking Compliance

### Run Linter
```bash
npm run lint
```

### Auto-fix Issues
```bash
npm run lint:fix
```

### Format Code
```bash
npm run format
```

## 💡 Tips

1. **Use VSCode:** The workspace settings will auto-format on save
2. **Pre-commit hooks:** Consider adding Husky + lint-staged to enforce styles before commits
3. **CI/CD:** The lint check runs in CI to catch any style violations

## 🤝 Contributing

When contributing to this project:
1. Ensure your editor respects the `.editorconfig` and VSCode settings
2. Run `npm run lint:fix` before committing
3. All PRs must pass linting checks in CI

---

**Last Updated:** February 2026  
**Enforced by:** ESLint + Prettier + VSCode
