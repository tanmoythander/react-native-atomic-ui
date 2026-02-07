import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { CheckBox } from '../CheckBox';

describe('CheckBox Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CheckBox value={false} onValueChange={() => {}} testID={'checkbox'} />
      </ThemeProvider>
    );

    expect(getByTestId('checkbox')).toBeTruthy();
  });

  it('renders label when provided', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CheckBox value={false} onValueChange={() => {}} label={'Accept terms'} />
      </ThemeProvider>
    );

    expect(getByText('Accept terms')).toBeTruthy();
  });

  it('calls onValueChange when pressed', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <CheckBox value={false} onValueChange={onValueChangeMock} testID={'checkbox'} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });

  it('does not call onValueChange when disabled', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <CheckBox
          value={false}
          onValueChange={onValueChangeMock}
          disabled={true}
          testID={'checkbox'}
        />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
  });

  it('displays checked state correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CheckBox value={true} onValueChange={() => {}} testID={'checkbox'} />
      </ThemeProvider>
    );

    expect(getByTestId('checkbox')).toBeTruthy();
  });

  it('toggles value when pressed', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId, rerender } = render(
      <ThemeProvider>
        <CheckBox value={false} onValueChange={onValueChangeMock} testID={'checkbox'} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);

    rerender(
      <ThemeProvider>
        <CheckBox value={true} onValueChange={onValueChangeMock} testID={'checkbox'} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(onValueChangeMock).toHaveBeenCalledWith(false);
  });
});
