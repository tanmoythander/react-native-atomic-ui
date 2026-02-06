import React from 'react';
import { Switch as RNSwitch } from 'react-native';
import { useTheme } from '../../theme/index';
import type { SwitchProps } from '../../types/index';

/**
 * Switch component with theme support
 */
export function Switch({ value, onValueChange, disabled = false, style, testID }: SwitchProps) {
  const { theme } = useTheme();

  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      trackColor={{
        false: theme.colors.border,
        true: theme.colors.primary,
      }}
      thumbColor={theme.colors.white}
      ios_backgroundColor={theme.colors.border}
      style={style}
      testID={testID}
    />
  );
}
