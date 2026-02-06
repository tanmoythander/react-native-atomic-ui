import React from 'react';
import { TouchableOpacity, View, Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/index';
import type { RadioButtonProps } from '../../types/index';

/**
 * RadioButton component with theme support
 */
export function RadioButton({
  value,
  selected,
  onSelect,
  label,
  disabled = false,
  style,
  testID,
}: RadioButtonProps) {
  const { theme } = useTheme();
  const isSelected = value === selected;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => !disabled && onSelect(value)}
      disabled={disabled}
      style={[styles.container, style]}
      testID={testID}
    >
      <View
        style={[
          styles.radio,
          {
            borderWidth: 2,
            borderColor: disabled
              ? theme.colors.disabled
              : isSelected
                ? theme.colors.primary
                : theme.colors.border,
            width: 24,
            height: 24,
            borderRadius: 12,
          },
        ]}
      >
        {isSelected && (
          <View
            style={[
              styles.radioInner,
              {
                backgroundColor: disabled ? theme.colors.disabled : theme.colors.primary,
                width: 12,
                height: 12,
                borderRadius: 6,
              },
            ]}
          />
        )}
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
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {},
});
