import React from 'react';
import { TextInput, View, Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/index';
import type { InputProps } from '../../types/index';

/**
 * Input component with theme support
 */
export function Input({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  editable = true,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  style,
  testID,
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, style]}>
      {label && (
        <RNText
          style={[
            theme.typography.body2,
            {
              color: error ? theme.colors.error : theme.colors.textSecondary,
              marginBottom: theme.spacing.xs,
            },
          ]}
        >
          {label}
        </RNText>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textTertiary}
        editable={editable}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        testID={testID}
        style={[
          theme.typography.body1,
          styles.input,
          {
            borderColor: error ? theme.colors.error : theme.colors.border,
            borderRadius: theme.borderRadius.sm,
            padding: theme.spacing.md,
            color: theme.colors.text,
            backgroundColor: editable ? theme.colors.surface : theme.colors.disabled,
            minHeight: multiline ? numberOfLines * 24 + theme.spacing.md * 2 : undefined,
          },
        ]}
      />
      {error && (
        <RNText
          style={[
            theme.typography.caption,
            { color: theme.colors.error, marginTop: theme.spacing.xs },
          ]}
        >
          {error}
        </RNText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
  },
});
