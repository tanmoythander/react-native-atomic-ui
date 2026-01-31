import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@theme/index';
import type { ButtonProps } from '../../types/index';
import { Text } from '../typography/Text';

/**
 * Button component with multiple variants and sizes
 */
export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  style,
  testID,
}: ButtonProps) {
  const { theme } = useTheme();

  // Get variant colors
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          borderColor: theme.colors.secondary,
        };
      case 'danger':
        return {
          backgroundColor: theme.colors.error,
          borderColor: theme.colors.error,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderColor: theme.colors.primary,
          borderWidth: 1,
        };
      default:
        return {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        };
    }
  };

  // Get size dimensions
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
          minHeight: 32,
        };
      case 'large':
        return {
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.md,
          minHeight: 56,
        };
      case 'medium':
      default:
        return {
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.md,
          minHeight: 48,
        };
    }
  };

  const buttonStyle = [
    styles.button,
    {
      ...getVariantStyle(),
      ...getSizeStyle(),
      borderRadius: theme.borderRadius.md,
      opacity: disabled || loading ? 0.5 : 1,
    },
    style,
  ];

  const textColor = variant === 'ghost' ? theme.colors.primary : theme.colors.white;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator
            color={textColor}
            size={size === 'small' ? 'small' : 'large'}
          />
        ) : (
          <>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text
              variant={size === 'small' ? 'body3' : 'body1'}
              color={textColor}
              style={styles.label}
            >
              {label}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: '600',
  },
});
