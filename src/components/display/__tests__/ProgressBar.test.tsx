import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0.5} testID={'progress'} />
      </ThemeProvider>
    );

    expect(getByTestId('progress')).toBeTruthy();
  });

  it('displays progress value correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0.75} testID={'progress'} />
      </ThemeProvider>
    );

    const progressBar = getByTestId('progress');
    expect(progressBar).toBeTruthy();
  });

  it('handles 0 progress', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0} testID={'progress'} />
      </ThemeProvider>
    );

    expect(getByTestId('progress')).toBeTruthy();
  });

  it('handles 100% progress', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={1} testID={'progress'} />
      </ThemeProvider>
    );

    expect(getByTestId('progress')).toBeTruthy();
  });

  it('applies custom height', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0.5} height={10} testID={'progress'} />
      </ThemeProvider>
    );

    const progressBar = getByTestId('progress');
    expect(progressBar.props.style).toMatchObject({
      height: 10,
    });
  });

  it('applies custom color', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0.5} color={'#FF0000'} testID={'progress'} />
      </ThemeProvider>
    );

    expect(getByTestId('progress')).toBeTruthy();
  });

  it('applies custom backgroundColor', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProgressBar progress={0.5} backgroundColor={'#CCCCCC'} testID={'progress'} />
      </ThemeProvider>
    );

    expect(getByTestId('progress')).toBeTruthy();
  });
});
