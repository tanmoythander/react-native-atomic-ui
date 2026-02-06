import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text as RNText,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useTheme } from '../../theme/index';
import type { CollapsibleProps } from '../../types/index';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * Collapsible component for expandable/collapsible sections
 */
export function Collapsible({
  title,
  children,
  initiallyExpanded = false,
  style,
  testID,
}: CollapsibleProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.md,
          overflow: 'hidden',
        },
        style,
      ]}
      testID={testID}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggleExpanded}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: theme.spacing.md,
          backgroundColor: theme.colors.surface,
        }}
      >
        <RNText style={[theme.typography.body1, { color: theme.colors.text, fontWeight: '600' }]}>
          {title}
        </RNText>
        <RNText style={[theme.typography.h3, { color: theme.colors.textSecondary }]}>
          {expanded ? '−' : '+'}
        </RNText>
      </TouchableOpacity>
      {expanded && (
        <View
          style={{
            padding: theme.spacing.md,
            backgroundColor: theme.colors.background,
          }}
        >
          {children}
        </View>
      )}
    </View>
  );
}
