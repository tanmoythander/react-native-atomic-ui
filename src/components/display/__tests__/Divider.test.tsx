import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Divider } from '../Divider';

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

    const divider = getByTestId('divider');
    expect(divider.props.style).toMatchObject({
      width: '100%',
      height: 1,
    });
  });

  it('renders vertical orientation', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider orientation={'vertical'} testID={'divider'} />
      </ThemeProvider>
    );

    const divider = getByTestId('divider');
    expect(divider.props.style).toMatchObject({
      width: 1,
      height: '100%',
    });
  });

  it('applies custom thickness', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider thickness={2} testID={'divider'} />
      </ThemeProvider>
    );

    const divider = getByTestId('divider');
    expect(divider.props.style).toMatchObject({
      height: 2,
    });
  });

  it('applies custom color', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Divider color={'#FF0000'} testID={'divider'} />
      </ThemeProvider>
    );

    const divider = getByTestId('divider');
    expect(divider.props.style).toMatchObject({
      backgroundColor: '#FF0000',
    });
  });
});
