import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Badge } from '../Badge';
import { Text } from '../../typography/Text';

describe('Badge Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Badge>
          <Text>New</Text>
        </Badge>
      </ThemeProvider>
    );

    expect(getByText('New')).toBeTruthy();
  });

  it('renders with different variants', () => {
    const variants: Array<'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'> = [
      'primary',
      'secondary',
      'success',
      'error',
      'warning',
      'info',
    ];

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

  it('renders with different sizes', () => {
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

    sizes.forEach((size) => {
      const { getByText } = render(
        <ThemeProvider>
          <Badge size={size}>
            <Text>{size}</Text>
          </Badge>
        </ThemeProvider>
      );

      expect(getByText(size)).toBeTruthy();
    });
  });

  it('applies testID correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Badge testID={'badge'}>
          <Text>Badge</Text>
        </Badge>
      </ThemeProvider>
    );

    expect(getByTestId('badge')).toBeTruthy();
  });
});
