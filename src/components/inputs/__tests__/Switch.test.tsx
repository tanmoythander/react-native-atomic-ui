import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Switch } from '../Switch';

describe('Switch Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch value={false} onValueChange={() => {}} testID={'switch'} />
      </ThemeProvider>
    );

    expect(getByTestId('switch')).toBeTruthy();
  });

  it('renders with correct value', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch value={true} onValueChange={() => {}} testID={'switch'} />
      </ThemeProvider>
    );

    const switchElement = getByTestId('switch');
    expect(switchElement.props.value).toBe(true);
  });

  it('can be disabled', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch value={false} onValueChange={() => {}} disabled={true} testID={'switch'} />
      </ThemeProvider>
    );

    const switchElement = getByTestId('switch');
    expect(switchElement.props.disabled).toBe(true);
  });
});
