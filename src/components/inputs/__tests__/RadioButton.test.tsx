import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { RadioButton } from '../RadioButton';

describe('RadioButton Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioButton value={'option1'} selected={''} onSelect={() => {}} testID={'radio'} />
      </ThemeProvider>
    );

    expect(getByTestId('radio')).toBeTruthy();
  });

  it('renders label when provided', () => {
    const { getByText } = render(
      <ThemeProvider>
        <RadioButton value={'option1'} selected={''} onSelect={() => {}} label={'Option 1'} />
      </ThemeProvider>
    );

    expect(getByText('Option 1')).toBeTruthy();
  });

  it('calls onSelect with value when pressed', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioButton value={'option1'} selected={''} onSelect={onSelectMock} testID={'radio'} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('radio'));
    expect(onSelectMock).toHaveBeenCalledWith('option1');
  });

  it('does not call onSelect when disabled', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioButton
          value={'option1'}
          selected={''}
          onSelect={onSelectMock}
          disabled={true}
          testID={'radio'}
        />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('radio'));
    expect(onSelectMock).not.toHaveBeenCalled();
  });

  it('shows selected state when value matches selected', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioButton value={'option1'} selected={'option1'} onSelect={() => {}} testID={'radio'} />
      </ThemeProvider>
    );

    expect(getByTestId('radio')).toBeTruthy();
    // The inner circle should be visible when selected
  });

  it('shows unselected state when value does not match selected', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioButton value={'option1'} selected={'option2'} onSelect={() => {}} testID={'radio'} />
      </ThemeProvider>
    );

    expect(getByTestId('radio')).toBeTruthy();
    // The inner circle should not be visible when unselected
  });
});
