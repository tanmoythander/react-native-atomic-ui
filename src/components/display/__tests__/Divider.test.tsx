import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Divider } from '../Divider';

// Helper to flatten style arrays into a single object
const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.filter(Boolean).map(flattenStyle));
  }
  if (typeof style === 'object' && style !== null) {
    return style as Record<string, unknown>;
  }
  return {};
};

describe('Divider Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider testID={'divider'} />
      </ThemeProvider>
    );

    expect(getByTestId('divider')).toBeTruthy();
  });

  it('renders horizontal orientation by default', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider testID={'divider'} />
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('divider').props.style);
    expect(style.width).toBe('100%');
    expect(style.height).toBe(1);
  });

  it('renders vertical orientation', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider orientation={'vertical'} testID={'divider'} />
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('divider').props.style);
    expect(style.width).toBe(1);
    expect(style.height).toBe('100%');
  });

  it('applies custom thickness', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider thickness={2} testID={'divider'} />
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('divider').props.style);
    expect(style.height).toBe(2);
  });

  it('applies custom color', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider color={'#FF0000'} testID={'divider'} />
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('divider').props.style);
    expect(style.backgroundColor).toBe('#FF0000');
  });
});
