import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Box, Row, Column } from '../Box';
import { Text } from '../../typography/Text';

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

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      padding: 24,
    });
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box gap={'md'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      gap: 16,
    });
  });

  it('applies backgroundColor correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box backgroundColor={'#FF0000'} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      backgroundColor: '#FF0000',
    });
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

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    });
  });

  it('applies width and height correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Box width={200} height={100} testID={'box'}>
          <Text>Content</Text>
        </Box>
      </ThemeProvider>
    );

    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      width: 200,
      height: 100,
    });
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

    const row = getByTestId('row');
    expect(row.props.style).toMatchObject({
      flexDirection: 'row',
      alignItems: 'center',
    });
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Row gap={'sm'} testID={'row'}>
          <Text>Content</Text>
        </Row>
      </ThemeProvider>
    );

    const row = getByTestId('row');
    expect(row.props.style).toMatchObject({
      gap: 8,
      flexDirection: 'row',
    });
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

    const column = getByTestId('column');
    expect(column.props.style).toMatchObject({
      flexDirection: 'column',
    });
  });

  it('applies gap correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Column gap={'lg'} testID={'column'}>
          <Text>Content</Text>
        </Column>
      </ThemeProvider>
    );

    const column = getByTestId('column');
    expect(column.props.style).toMatchObject({
      gap: 24,
      flexDirection: 'column',
    });
  });
});
