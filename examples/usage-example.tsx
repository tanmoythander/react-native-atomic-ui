import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  ThemeProvider,
  useTheme,
  Box,
  Column,
  Row,
  Button,
  H1,
  Body1,
} from '../src/index';

function ExampleContent() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ padding: theme.spacing.lg }}
    >
      <Box marginVertical="lg">
        <H1 color={theme.colors.primary}>Atomic UI Library</H1>
        <Body1 color={theme.colors.textSecondary}>
          A zero-dependency React Native component library
        </Body1>
      </Box>

      <Column gap="lg" marginVertical="lg">
        <Box>
          <Body1>Current Theme</Body1>
          <H1>{isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}</H1>
        </Box>

        <Button
          label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
          variant="primary"
          size="large"
        />

        <Box
          backgroundColor={theme.colors.surface}
          padding="lg"
          borderRadius="md"
        >
          <Body1>Primary Color</Body1>
          <Box
            backgroundColor={theme.colors.primary}
            style={{ height: 100, marginTop: theme.spacing.sm }}
            borderRadius="md"
          />
        </Box>

        <Row gap="md">
          <Box style={{ flex: 1 }}>
            <Button
              label="Secondary"
              onPress={() => {}}
              variant="secondary"
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Button label="Danger" onPress={() => {}} variant="danger" />
          </Box>
        </Row>

        <Row gap="md">
          <Box style={{ flex: 1 }}>
            <Button label="Small" onPress={() => {}} size="small" />
          </Box>
          <Box style={{ flex: 1 }}>
            <Button label="Large" onPress={() => {}} size="large" />
          </Box>
        </Row>
      </Column>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <SafeAreaView style={{ flex: 1 }}>
        <ExampleContent />
      </SafeAreaView>
    </ThemeProvider>
  );
}
