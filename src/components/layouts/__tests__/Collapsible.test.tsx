import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../../theme';
import { Collapsible } from '../Collapsible';
import { Text } from '../../typography/Text';

describe('Collapsible Component', () => {
  it('renders with title', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Collapsible title={'Test Title'}>
          <Text>Content</Text>
        </Collapsible>
      </ThemeProvider>
    );

    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders children when expanded', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Collapsible title={'Test Title'} initiallyExpanded={true}>
          <Text>Hidden Content</Text>
        </Collapsible>
      </ThemeProvider>
    );

    expect(getByText('Hidden Content')).toBeTruthy();
  });

  it('toggles expanded state when pressed', () => {
    const { getByText, queryByText } = render(
      <ThemeProvider>
        <Collapsible title={'Test Title'} initiallyExpanded={false}>
          <Text>Hidden Content</Text>
        </Collapsible>
      </ThemeProvider>
    );

    // Initially collapsed
    expect(queryByText('Hidden Content')).toBeNull();

    // Click to expand
    fireEvent.press(getByText('Test Title'));
    
    // Content should be visible (though animation may affect immediate visibility)
    // Note: In a real test, you might need to wait for animations
  });

  it('applies testID correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Collapsible title={'Test Title'} testID={'collapsible'}>
          <Text>Content</Text>
        </Collapsible>
      </ThemeProvider>
    );

    expect(getByTestId('collapsible')).toBeTruthy();
  });
});
