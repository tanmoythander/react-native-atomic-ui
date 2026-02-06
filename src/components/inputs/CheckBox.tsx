import React from 'react';
import { TouchableOpacity, View, Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/index';
import type { CheckBoxProps } from '../../types/index';

/**
 * CheckBox component with theme support
 */
export function CheckBox({
  value,
  onValueChange,
  label,
  disabled = false,
  style,
  testID,
}: CheckBoxProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      style={[styles.container, style]}
      testID={testID}
    >
      <View
        style={[
          styles.checkbox,
          {
            borderColor: disabled
              ? theme.colors.disabled
              : value
                ? theme.colors.primary
                : theme.colors.border,
            backgroundColor: disabled
              ? theme.colors.disabled
              : value
                ? theme.colors.primary
                : 'transparent',
            borderRadius: theme.borderRadius.xs,
          },
        ]}
      >
        {value && <RNText style={[styles.checkmark, { color: theme.colors.white }]}>✓</RNText>}
      </View>
      {label && (
        <RNText
          style={[
            theme.typography.body1,
            {
              color: disabled ? theme.colors.textTertiary : theme.colors.text,
              marginLeft: theme.spacing.sm,
            },
          ]}
        >
          {label}
        </RNText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: 24,
    height: 24,
  },
  checkmark: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
