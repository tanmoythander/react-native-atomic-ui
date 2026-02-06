import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text as RNText,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
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
        styles.wrapper,
        {
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.md,
        },
        style,
      ]}
      testID={testID}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggleExpanded}
        style={[
          styles.header,
          {
            padding: theme.spacing.md,
            backgroundColor: theme.colors.surface,
          },
        ]}
      >
        <RNText style={[theme.typography.body1, styles.headerText, { color: theme.colors.text }]}>
          {title}
        </RNText>
        <RNText style={[theme.typography.h3, { color: theme.colors.textSecondary }]}>
          {expanded ? '−' : '+'}
        </RNText>
      </TouchableOpacity>
      {expanded && (
        <View
          style={[
            styles.content,
            {
              padding: theme.spacing.md,
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
  },
  content: {},
});
