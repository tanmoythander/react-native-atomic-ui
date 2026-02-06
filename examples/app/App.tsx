/**
 * AtomicUIApp - Showcase for react-native-atomic-ui
 *
 * This app demonstrates all the core UI components from the
 * react-native-atomic-ui library.
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, ScrollView, Alert } from 'react-native';
import {
  ThemeProvider,
  useTheme,
  Box,
  Row,
  Column,
  H1,
  H2,
  H3,
  Body1,
  Body2,
  Caption,
  Button,
  Input,
  CheckBox,
  RadioButton,
  Switch,
  ProgressBar,
  Badge,
  Divider,
  Collapsible,
} from 'react-native-atomic-ui';

function App() {
  return (
    <ThemeProvider defaultTheme={'system'}>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, isDark, toggleTheme } = useTheme();

  // State for input components
  const [textInput, setTextInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchValue, setSwitchValue] = useState(false);
  const [progress, setProgress] = useState(0.65);

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Box flex={1} backgroundColor={theme.colors.background}>
        <ScrollView
          contentContainerStyle={{ padding: theme.spacing.lg }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <Column gap={'md'}>
            <H1 color={theme.colors.primary}>Atomic UI Showcase</H1>
            <Body1 color={theme.colors.textSecondary}>
              Explore all components from react-native-atomic-ui
            </Body1>
          </Column>

          {/* Theme Toggle Section */}
          <Box
            padding={'lg'}
            marginVertical={'lg'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H3>Theme Controls</H3>
              <Body2 color={theme.colors.textSecondary}>
                Current theme: {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </Body2>
              <Button
                label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                onPress={toggleTheme}
                variant={'primary'}
              />
            </Column>
          </Box>

          {/* Typography Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'sm'}>
              <H2>Typography</H2>
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <Body1>Body 1 - Regular text for content</Body1>
              <Body2>Body 2 - Slightly smaller text</Body2>
              <Caption>Caption - Small text for hints</Caption>
            </Column>
          </Box>

          {/* Button Variants Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Button Variants</H2>

              <Button
                label={'Primary Button'}
                onPress={() =>
                  Alert.alert('Primary', 'You pressed the primary button!')
                }
                variant={'primary'}
              />

              <Button
                label={'Secondary Button'}
                onPress={() =>
                  Alert.alert('Secondary', 'You pressed the secondary button!')
                }
                variant={'secondary'}
              />

              <Button
                label={'Danger Button'}
                onPress={() =>
                  Alert.alert('Danger', 'You pressed the danger button!')
                }
                variant={'danger'}
              />

              <Button
                label={'Ghost Button'}
                onPress={() =>
                  Alert.alert('Ghost', 'You pressed the ghost button!')
                }
                variant={'ghost'}
              />

              <Button
                label={'Disabled Button'}
                onPress={() => {}}
                variant={'primary'}
                disabled={true}
              />

              <Button
                label={'Loading Button'}
                onPress={() => {}}
                variant={'primary'}
                loading={true}
              />
            </Column>
          </Box>

          {/* Button Sizes Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Button Sizes</H2>

              <Button
                label={'Small Button'}
                onPress={() => Alert.alert('Size', 'Small button pressed')}
                variant={'primary'}
                size={'small'}
              />

              <Button
                label={'Medium Button'}
                onPress={() => Alert.alert('Size', 'Medium button pressed')}
                variant={'primary'}
                size={'medium'}
              />

              <Button
                label={'Large Button'}
                onPress={() => Alert.alert('Size', 'Large button pressed')}
                variant={'primary'}
                size={'large'}
              />
            </Column>
          </Box>

          {/* Layout Components Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Layout Components</H2>

              <Column gap={'sm'}>
                <Body1>Row Layout (Horizontal)</Body1>
                <Row gap={'sm'}>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.primary}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item 1</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.secondary}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item 2</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.error}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item 3</Caption>
                  </Box>
                </Row>
              </Column>

              <Column gap={'sm'}>
                <Body1>Column Layout (Vertical)</Body1>
                <Column gap={'xs'}>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.success}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item A</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.warning}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item B</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.info}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>Item C</Caption>
                  </Box>
                </Column>
              </Column>
            </Column>
          </Box>

          {/* Spacing & Border Radius Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Spacing & Border Radius</H2>

              <Column gap={'sm'}>
                <Body1>Padding Variants</Body1>
                <Row gap={'xs'}>
                  <Box padding={'xs'} backgroundColor={theme.colors.border}>
                    <Caption>xs</Caption>
                  </Box>
                  <Box padding={'sm'} backgroundColor={theme.colors.border}>
                    <Caption>sm</Caption>
                  </Box>
                  <Box padding={'md'} backgroundColor={theme.colors.border}>
                    <Caption>md</Caption>
                  </Box>
                  <Box padding={'lg'} backgroundColor={theme.colors.border}>
                    <Caption>lg</Caption>
                  </Box>
                </Row>
              </Column>

              <Column gap={'sm'}>
                <Body1>Border Radius Variants</Body1>
                <Row gap={'xs'}>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.primary}
                    borderRadius={'xs'}
                  >
                    <Caption color={theme.colors.white}>xs</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.primary}
                    borderRadius={'sm'}
                  >
                    <Caption color={theme.colors.white}>sm</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.primary}
                    borderRadius={'md'}
                  >
                    <Caption color={theme.colors.white}>md</Caption>
                  </Box>
                  <Box
                    padding={'md'}
                    backgroundColor={theme.colors.primary}
                    borderRadius={'lg'}
                  >
                    <Caption color={theme.colors.white}>lg</Caption>
                  </Box>
                </Row>
              </Column>
            </Column>
          </Box>

          {/* Colors Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Theme Colors</H2>

              <Row gap={'sm'}>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.primary}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Primary</Caption>
                </Box>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.secondary}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Secondary</Caption>
                </Box>
              </Row>

              <Row gap={'sm'}>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.success}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Success</Caption>
                </Box>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.error}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Error</Caption>
                </Box>
              </Row>

              <Row gap={'sm'}>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.warning}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Warning</Caption>
                </Box>
                <Box
                  padding={'md'}
                  backgroundColor={theme.colors.info}
                  borderRadius={'sm'}
                  flex={1}
                >
                  <Caption color={theme.colors.white}>Info</Caption>
                </Box>
              </Row>
            </Column>
          </Box>

          {/* Input Components Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Input Components</H2>

              <Column gap={'sm'}>
                <Body1>Text Input</Body1>
                <Input
                  value={textInput}
                  onChangeText={setTextInput}
                  placeholder={'Enter your name'}
                  label={'Name'}
                />
              </Column>

              <Column gap={'sm'}>
                <Body1>Email Input</Body1>
                <Input
                  value={emailInput}
                  onChangeText={setEmailInput}
                  placeholder={'your@email.com'}
                  label={'Email Address'}
                  keyboardType={'email-address'}
                />
              </Column>

              <Column gap={'sm'}>
                <Body1>Password Input (with error)</Body1>
                <Input
                  value={passwordInput}
                  onChangeText={setPasswordInput}
                  placeholder={'Enter password'}
                  label={'Password'}
                  secureTextEntry={true}
                  error={
                    passwordInput.length > 0 && passwordInput.length < 6
                      ? 'Password must be at least 6 characters'
                      : undefined
                  }
                />
              </Column>

              <Column gap={'sm'}>
                <Body1>Multiline Input</Body1>
                <Input
                  value={textInput}
                  onChangeText={setTextInput}
                  placeholder={'Enter your message'}
                  label={'Message'}
                  multiline={true}
                  numberOfLines={4}
                />
              </Column>
            </Column>
          </Box>

          {/* Selection Components Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Selection Components</H2>

              <Column gap={'sm'}>
                <Body1>CheckBoxes</Body1>
                <CheckBox
                  value={checkbox1}
                  onValueChange={setCheckbox1}
                  label={'Accept terms and conditions'}
                />
                <CheckBox
                  value={checkbox2}
                  onValueChange={setCheckbox2}
                  label={'Subscribe to newsletter'}
                />
                <CheckBox
                  value={false}
                  onValueChange={() => {}}
                  label={'Disabled option'}
                  disabled={true}
                />
              </Column>

              <Column gap={'sm'}>
                <Body1>Radio Buttons</Body1>
                <RadioButton
                  value={'option1'}
                  selected={radioValue}
                  onSelect={setRadioValue}
                  label={'Option 1'}
                />
                <RadioButton
                  value={'option2'}
                  selected={radioValue}
                  onSelect={setRadioValue}
                  label={'Option 2'}
                />
                <RadioButton
                  value={'option3'}
                  selected={radioValue}
                  onSelect={setRadioValue}
                  label={'Option 3'}
                />
                <RadioButton
                  value={'option4'}
                  selected={radioValue}
                  onSelect={() => {}}
                  label={'Disabled option'}
                  disabled={true}
                />
              </Column>

              <Row gap={'md'} alignItems={'center'}>
                <Body1>Switch</Body1>
                <Switch value={switchValue} onValueChange={setSwitchValue} />
                <Caption color={theme.colors.textSecondary}>
                  {switchValue ? 'ON' : 'OFF'}
                </Caption>
              </Row>
            </Column>
          </Box>

          {/* Display Components Section */}
          <Box
            padding={'lg'}
            marginVertical={'md'}
            backgroundColor={theme.colors.surface}
            borderRadius={'md'}
          >
            <Column gap={'md'}>
              <H2>Display Components</H2>

              <Column gap={'sm'}>
                <Body1>Progress Bar</Body1>
                <ProgressBar progress={progress} />
                <Row gap={'sm'}>
                  <Button
                    label={'Decrease'}
                    onPress={() => setProgress(Math.max(0, progress - 0.1))}
                    variant={'secondary'}
                    size={'small'}
                  />
                  <Button
                    label={'Increase'}
                    onPress={() => setProgress(Math.min(1, progress + 0.1))}
                    variant={'primary'}
                    size={'small'}
                  />
                </Row>
                <Caption color={theme.colors.textSecondary}>
                  Progress: {Math.round(progress * 100)}%
                </Caption>
              </Column>

              <Column gap={'sm'}>
                <Body1>Badges</Body1>
                <Row gap={'sm'} flexWrap={'wrap'}>
                  <Badge variant={'primary'}>Primary</Badge>
                  <Badge variant={'secondary'}>Secondary</Badge>
                  <Badge variant={'success'}>Success</Badge>
                  <Badge variant={'error'}>Error</Badge>
                  <Badge variant={'warning'}>Warning</Badge>
                  <Badge variant={'info'}>Info</Badge>
                </Row>
              </Column>

              <Column gap={'sm'}>
                <Body1>Badge Sizes</Body1>
                <Row gap={'sm'} alignItems={'center'}>
                  <Badge variant={'primary'} size={'small'}>
                    Small
                  </Badge>
                  <Badge variant={'primary'} size={'medium'}>
                    Medium
                  </Badge>
                  <Badge variant={'primary'} size={'large'}>
                    Large
                  </Badge>
                </Row>
              </Column>

              <Column gap={'sm'}>
                <Body1>Dividers</Body1>
                <Divider />
                <Body2 color={theme.colors.textSecondary}>
                  Horizontal divider above
                </Body2>
                <Row gap={'md'} height={50}>
                  <Box flex={1}>
                    <Caption>Left content</Caption>
                  </Box>
                  <Divider orientation={'vertical'} />
                  <Box flex={1}>
                    <Caption>Right content</Caption>
                  </Box>
                </Row>
              </Column>
            </Column>
          </Box>

          {/* Collapsible Section */}
          <Box marginVertical={'md'}>
            <Column gap={'md'}>
              <H2>Collapsible</H2>

              <Collapsible
                title={'What is Atomic UI?'}
                initiallyExpanded={true}
              >
                <Body2>
                  Atomic UI is a zero-dependency React Native component library
                  with built-in dark mode support. It provides 30+ core
                  components that are TypeScript-first and fully themeable.
                </Body2>
              </Collapsible>

              <Collapsible title={'How do I customize the theme?'}>
                <Body2>
                  You can customize the theme by wrapping your app with
                  ThemeProvider and using the useTheme hook to access theme
                  values. You can also create custom theme objects that override
                  the default light and dark themes.
                </Body2>
              </Collapsible>

              <Collapsible title={'Is it compatible with Expo?'}>
                <Body2>
                  Yes! Atomic UI works perfectly with both bare React Native
                  projects and Expo projects. Just install it via npm and start
                  using the components.
                </Body2>
              </Collapsible>
            </Column>
          </Box>

          {/* Footer */}
          <Box marginVertical={'xl'}>
            <Column gap={'xs'}>
              <Body2 color={theme.colors.textSecondary} textAlign={'center'}>
                Made with react-native-atomic-ui
              </Body2>
              <Caption color={theme.colors.textTertiary} textAlign={'center'}>
                v1.0.0 • Zero Dependencies • TypeScript First
              </Caption>
            </Column>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}

export default App;
