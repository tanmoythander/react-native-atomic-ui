import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme/index';
import type { ProgressBarProps } from '../../types/index';

/**
 * ProgressBar component with theme support
 */
export function ProgressBar({
  progress,
  height = 8,
  color,
  backgroundColor,
  borderRadius = 'full',
  style,
  testID,
}: ProgressBarProps) {
  const { theme } = useTheme();

  // Clamp progress between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <View
      style={[
        {
          height,
          backgroundColor: backgroundColor || theme.colors.border,
          borderRadius: theme.borderRadius[borderRadius],
          overflow: 'hidden',
        },
        style,
      ]}
      testID={testID}
    >
      <View
        style={{
          height: '100%',
          width: `${clampedProgress * 100}%`,
          backgroundColor: color || theme.colors.primary,
        }}
      />
    </View>
  );
}
