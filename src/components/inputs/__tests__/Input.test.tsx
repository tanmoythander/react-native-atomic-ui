import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Input } from '../Input';

describe('Input Component', () => {
  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={() => {}} placeholder={'Enter text'} />
      </ThemeProvider>
    );

    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('displays value correctly', () => {
    const { getByDisplayValue } = render(
      <ThemeProvider>
        <Input value={'Test Value'} onChangeText={() => {}} />
      </ThemeProvider>
    );

    expect(getByDisplayValue('Test Value')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={onChangeTextMock} testID={'input'} />
      </ThemeProvider>
    );

    fireEvent.changeText(getByTestId('input'), 'New Text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New Text');
  });

  it('renders label when provided', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={() => {}} label={'Username'} />
      </ThemeProvider>
    );

    expect(getByText('Username')).toBeTruthy();
  });

  it('renders error message when provided', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={() => {}} error={'This field is required'} />
      </ThemeProvider>
    );

    expect(getByText('This field is required')).toBeTruthy();
  });

  it('disables input when editable is false', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={() => {}} editable={false} testID={'input'} />
      </ThemeProvider>
    );

    const input = getByTestId('input');
    expect(input.props.editable).toBe(false);
  });

  it('applies secureTextEntry correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Input value={''} onChangeText={() => {}} secureTextEntry={true} testID={'input'} />
      </ThemeProvider>
    );

    const input = getByTestId('input');
    expect(input.props.secureTextEntry).toBe(true);
  });

  it('applies keyboard type correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Input
          value={''}
          onChangeText={() => {}}
          keyboardType={'email-address'}
          testID={'input'}
        />
      </ThemeProvider>
    );

    const input = getByTestId('input');
    expect(input.props.keyboardType).toBe('email-address');
  });

  it('supports multiline input', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Input
          value={''}
          onChangeText={() => {}}
          multiline={true}
          numberOfLines={4}
          testID={'input'}
        />
      </ThemeProvider>
    );

    const input = getByTestId('input');
    expect(input.props.multiline).toBe(true);
    expect(input.props.numberOfLines).toBe(4);
  });
});
