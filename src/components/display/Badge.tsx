import React from 'react';
import { View, Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/index';
import type { BadgeProps } from '../../types/index';

/**
 * Badge component for status indicators
 */
export function Badge({
  children,
  variant = 'primary',
  size = 'medium',
  style,
  testID,
}: BadgeProps) {
  const { theme } = useTheme();

  const variantColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: theme.colors.success,
    error: theme.colors.error,
    warning: theme.colors.warning,
    info: theme.colors.info,
  };

  const sizeStyles = {
    small: {
      paddingHorizontal: theme.spacing.xs,
      paddingVertical: theme.spacing.xs / 2,
      fontSize: 10,
    },
    medium: {
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      fontSize: 12,
    },
    large: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      fontSize: 14,
    },
  };

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: variantColors[variant],
          borderRadius: theme.borderRadius.full,
          ...sizeStyles[size],
        },
        style,
      ]}
      testID={testID}
    >
      <RNText
        style={[
          styles.text,
          {
            color: theme.colors.white,
            fontSize: sizeStyles[size].fontSize,
          },
        ]}
      >
        {children}
      </RNText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
  },
});
