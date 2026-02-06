import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme/index';
import type { DividerProps } from '../../types/index';

/**
 * Divider component for visual separation
 */
export function Divider({
  orientation = 'horizontal',
  thickness = 1,
  color,
  style,
  testID,
}: DividerProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: color || theme.colors.border,
          ...(orientation === 'horizontal'
            ? { height: thickness, width: '100%' }
            : { width: thickness, height: '100%' }),
        },
        style,
      ]}
      testID={testID}
    />
  );
}
