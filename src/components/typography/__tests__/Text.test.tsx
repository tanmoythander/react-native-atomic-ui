import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Text, H1, H2, H3, H4, H5, H6, Body1, Body2, SubTitle1, SubTitle2, Caption, Overline } from '../Text';

describe('Text Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Text>Hello World</Text>
      </ThemeProvider>
    );

    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies variant correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Text variant={'h1'}>Heading</Text>
      </ThemeProvider>
    );

    expect(getByText('Heading')).toBeTruthy();
  });

  it('applies custom color', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Text color={'#FF0000'} testID={'text'}>
          Colored Text
        </Text>
      </ThemeProvider>
    );

    const text = getByTestId('text');
    expect(text.props.style).toMatchObject({
      color: '#FF0000',
    });
  });

  it('applies text alignment', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Text textAlign={'center'} testID={'text'}>
          Centered Text
        </Text>
      </ThemeProvider>
    );

    const text = getByTestId('text');
    expect(text.props.style).toMatchObject({
      textAlign: 'center',
    });
  });

  it('applies testID correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Text testID={'custom-text'}>Test</Text>
      </ThemeProvider>
    );

    expect(getByTestId('custom-text')).toBeTruthy();
  });
});

describe('Heading Components', () => {
  it('H1 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H1>Heading 1</H1>
      </ThemeProvider>
    );

    expect(getByText('Heading 1')).toBeTruthy();
  });

  it('H2 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H2>Heading 2</H2>
      </ThemeProvider>
    );

    expect(getByText('Heading 2')).toBeTruthy();
  });

  it('H3 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H3>Heading 3</H3>
      </ThemeProvider>
    );

    expect(getByText('Heading 3')).toBeTruthy();
  });

  it('H4 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H4>Heading 4</H4>
      </ThemeProvider>
    );

    expect(getByText('Heading 4')).toBeTruthy();
  });

  it('H5 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H5>Heading 5</H5>
      </ThemeProvider>
    );

    expect(getByText('Heading 5')).toBeTruthy();
  });

  it('H6 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <H6>Heading 6</H6>
      </ThemeProvider>
    );

    expect(getByText('Heading 6')).toBeTruthy();
  });
});

describe('Body Text Components', () => {
  it('Body1 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Body1>Body Text 1</Body1>
      </ThemeProvider>
    );

    expect(getByText('Body Text 1')).toBeTruthy();
  });

  it('Body2 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Body2>Body Text 2</Body2>
      </ThemeProvider>
    );

    expect(getByText('Body Text 2')).toBeTruthy();
  });
});

describe('Subtitle Components', () => {
  it('SubTitle1 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <SubTitle1>Subtitle 1</SubTitle1>
      </ThemeProvider>
    );

    expect(getByText('Subtitle 1')).toBeTruthy();
  });

  it('SubTitle2 renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <SubTitle2>Subtitle 2</SubTitle2>
      </ThemeProvider>
    );

    expect(getByText('Subtitle 2')).toBeTruthy();
  });
});

describe('Small Text Components', () => {
  it('Caption renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Caption>Caption Text</Caption>
      </ThemeProvider>
    );

    expect(getByText('Caption Text')).toBeTruthy();
  });

  it('Overline renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Overline>Overline Text</Overline>
      </ThemeProvider>
    );

    expect(getByText('Overline Text')).toBeTruthy();
  });
});
