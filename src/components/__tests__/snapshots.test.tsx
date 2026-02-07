import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../theme';
import { Box, Row, Column } from '../layouts/Box';
import { Collapsible } from '../layouts/Collapsible';
import { Button } from '../inputs/Button';
import { Input } from '../inputs/Input';
import { CheckBox } from '../inputs/CheckBox';
import { RadioButton } from '../inputs/RadioButton';
import { Switch } from '../inputs/Switch';
import { Badge } from '../display/Badge';
import { Divider } from '../display/Divider';
import { ProgressBar } from '../display/ProgressBar';
import { Text, H1, H2, H3, Body1, Body2, SubTitle1, Caption, Overline } from '../typography/Text';

/**
 * Snapshot tests for all components.
 * These ensure consistent rendering across changes.
 * Run `npm test -- -u` to update snapshots after intentional changes.
 */
describe('Component Snapshots', () => {
  // Layout Components
  describe('Layout Components', () => {
    it('Box renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Box padding={'md'} backgroundColor={'#FFFFFF'} borderRadius={'md'} testID={'box'}>
            <Text>Box Content</Text>
          </Box>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Row renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Row gap={'sm'} testID={'row'}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </Row>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Column renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Column gap={'md'} testID={'column'}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </Column>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Collapsible renders consistently (collapsed)', () => {
      const tree = render(
        <ThemeProvider>
          <Collapsible title={'Section Title'} initiallyExpanded={false}>
            <Text>Hidden Content</Text>
          </Collapsible>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Collapsible renders consistently (expanded)', () => {
      const tree = render(
        <ThemeProvider>
          <Collapsible title={'Section Title'} initiallyExpanded={true}>
            <Text>Visible Content</Text>
          </Collapsible>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  // Input Components
  describe('Input Components', () => {
    it('Button primary renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Button label={'Primary Button'} onPress={() => {}} variant={'primary'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Button ghost renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Button label={'Ghost Button'} onPress={() => {}} variant={'ghost'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Button disabled renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Button label={'Disabled'} onPress={() => {}} disabled={true} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Input renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Input
            value={'Test Value'}
            onChangeText={() => {}}
            label={'Email'}
            placeholder={'Enter email'}
          />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Input with error renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Input
            value={''}
            onChangeText={() => {}}
            label={'Email'}
            error={'This field is required'}
          />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('CheckBox unchecked renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <CheckBox value={false} onValueChange={() => {}} label={'Accept terms'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('CheckBox checked renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <CheckBox value={true} onValueChange={() => {}} label={'Accept terms'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('RadioButton unselected renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <RadioButton
            value={'option1'}
            selected={'option2'}
            onSelect={() => {}}
            label={'Option 1'}
          />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('RadioButton selected renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <RadioButton
            value={'option1'}
            selected={'option1'}
            onSelect={() => {}}
            label={'Option 1'}
          />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Switch renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Switch value={true} onValueChange={() => {}} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  // Display Components
  describe('Display Components', () => {
    it('Badge primary renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Badge variant={'primary'} size={'medium'}>
            New
          </Badge>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Badge error renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Badge variant={'error'} size={'small'}>
            3
          </Badge>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Divider horizontal renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Divider orientation={'horizontal'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Divider vertical renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Divider orientation={'vertical'} thickness={2} color={'#FF0000'} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('ProgressBar renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <ProgressBar progress={0.65} height={8} />
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  // Typography Components
  describe('Typography Components', () => {
    it('Text with variant renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Text variant={'body1'}>Body text</Text>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('H1 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <H1>Main Heading</H1>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('H2 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <H2>Sub Heading</H2>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('H3 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <H3>Section Heading</H3>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Body1 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Body1>Body paragraph text</Body1>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Body2 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Body2>Secondary body text</Body2>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('SubTitle1 renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <SubTitle1>Subtitle</SubTitle1>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Caption renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Caption>Small caption text</Caption>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Overline renders consistently', () => {
      const tree = render(
        <ThemeProvider>
          <Overline>OVERLINE TEXT</Overline>
        </ThemeProvider>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
