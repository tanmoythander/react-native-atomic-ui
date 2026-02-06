import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders label correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button label={'Click Me'} onPress={() => {}} />
      </ThemeProvider>
    );

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <Button label={'Click Me'} onPress={onPressMock} />
      </ThemeProvider>
    );

    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <Button label={'Click Me'} onPress={onPressMock} disabled={true} />
      </ThemeProvider>
    );

    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders with primary variant by default', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Button label={'Click Me'} onPress={() => {}} testID={'button'} />
      </ThemeProvider>
    );

    const button = getByTestID('button');
    expect(button).toBeTruthy();
  });

  it('renders with different variants', () => {
    const variants: Array<'primary' | 'secondary' | 'danger' | 'ghost'> = [
      'primary',
      'secondary',
      'danger',
      'ghost',
    ];

    variants.forEach((variant) => {
      const { getByText } = render(
        <ThemeProvider>
          <Button label={variant} onPress={() => {}} variant={variant} />
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
          <Button label={size} onPress={() => {}} size={size} />
        </ThemeProvider>
      );

      expect(getByText(size)).toBeTruthy();
    });
  });

  it('applies testID correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Button label={'Click Me'} onPress={() => {}} testID={'custom-button'} />
      </ThemeProvider>
    );

    expect(getByTestId('custom-button')).toBeTruthy();
  });
});
