import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Box, Row, Column } from '../Box';
import { Text } from '../../typography/Text';

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

describe('Box Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Box>
          <Text>Test Content</Text>
        </Box>
      </ThemeProvider>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('applies padding correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box padding={'lg'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('box').props.style);
    expect(style.padding).toBe(24);
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box gap={'md'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('box').props.style);
    expect(style.gap).toBe(16);
  });

  it('applies backgroundColor correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box backgroundColor={'#FF0000'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('box').props.style);
    expect(style.backgroundColor).toBe('#FF0000');
  });

  it('applies flex layout props correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box
          flex={1}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          testID={'box'}
        >
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('box').props.style);
    expect(style.flex).toBe(1);
    expect(style.flexDirection).toBe('row');
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('space-between');
  });

  it('applies width and height correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box width={200} height={100} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('box').props.style);
    expect(style.width).toBe(200);
    expect(style.height).toBe(100);
  });
});

describe('Row Component', () => {
  it('renders with row flex direction', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Row testID={'row'}>
          <Text>Content</Text>
        </Row>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('row').props.style);
    expect(style.flexDirection).toBe('row');
    expect(style.alignItems).toBe('center');
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Row gap={'sm'} testID={'row'}>
          <Text>Content</Text>
        </Row>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('row').props.style);
    expect(style.gap).toBe(8);
    expect(style.flexDirection).toBe('row');
  });
});

describe('Column Component', () => {
  it('renders with column flex direction', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Column testID={'column'}>
          <Text>Content</Text>
        </Column>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('column').props.style);
    expect(style.flexDirection).toBe('column');
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Column gap={'lg'} testID={'column'}>
          <Text>Content</Text>
        </Column>
      </ThemeProvider>
    );

    const style = flattenStyle(getByTestId('column').props.style);
    expect(style.gap).toBe(24);
    expect(style.flexDirection).toBe('column');
  });
});
