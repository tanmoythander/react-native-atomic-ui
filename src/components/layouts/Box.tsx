import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '@theme/index';
import type { BoxProps } from '../../types/index';

/**
 * Box - Base layout component with flexbox support
 * Serves as the foundation for building custom layouts
 */
export function Box({
  children,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  padding,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginHorizontal,
  marginVertical,
  gap,
  backgroundColor,
  borderRadius,
  width,
  height,
  style,
  testID,
}: BoxProps) {
  const { theme } = useTheme();

  const boxStyle: ViewProps['style'] = [
    flex !== undefined && { flex },
    flexDirection && { flexDirection },
    alignItems && { alignItems },
    justifyContent && { justifyContent },
    flexWrap && { flexWrap },
    width !== undefined && { width },
    height !== undefined && { height },
    padding && { padding: theme.spacing[padding] },
    paddingHorizontal && { paddingHorizontal: theme.spacing[paddingHorizontal] },
    paddingVertical && { paddingVertical: theme.spacing[paddingVertical] },
    margin && { margin: theme.spacing[margin] },
    marginHorizontal && { marginHorizontal: theme.spacing[marginHorizontal] },
    marginVertical && { marginVertical: theme.spacing[marginVertical] },
    gap && { gap: theme.spacing[gap] },
    backgroundColor && { backgroundColor },
    borderRadius && { borderRadius: theme.borderRadius[borderRadius] },
    style,
  ];

  return (
    <View style={boxStyle} testID={testID}>
      {children}
    </View>
  );
}

/**
 * Row - Horizontal flex container
 * Equivalent to flexDirection: 'row'
 */
export function Row({
  children,
  flex,
  alignItems = 'center',
  justifyContent,
  flexWrap,
  padding,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginHorizontal,
  marginVertical,
  gap,
  backgroundColor,
  borderRadius,
  width,
  height,
  style,
  testID,
}: BoxProps) {
  const { theme } = useTheme();

  const rowStyle: ViewProps['style'] = [
    { flexDirection: 'row' },
    flex !== undefined && { flex },
    alignItems && { alignItems },
    justifyContent && { justifyContent },
    flexWrap && { flexWrap },
    width !== undefined && { width },
    height !== undefined && { height },
    padding && { padding: theme.spacing[padding] },
    paddingHorizontal && { paddingHorizontal: theme.spacing[paddingHorizontal] },
    paddingVertical && { paddingVertical: theme.spacing[paddingVertical] },
    margin && { margin: theme.spacing[margin] },
    marginHorizontal && { marginHorizontal: theme.spacing[marginHorizontal] },
    marginVertical && { marginVertical: theme.spacing[marginVertical] },
    gap && { gap: theme.spacing[gap] },
    backgroundColor && { backgroundColor },
    borderRadius && { borderRadius: theme.borderRadius[borderRadius] },
    style,
  ];

  return (
    <View style={rowStyle} testID={testID}>
      {children}
    </View>
  );
}

/**
 * Column - Vertical flex container
 * Equivalent to flexDirection: 'column'
 */
export function Column({
  children,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  padding,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginHorizontal,
  marginVertical,
  gap,
  backgroundColor,
  borderRadius,
  width,
  height,
  style,
  testID,
}: BoxProps) {
  const { theme } = useTheme();

  const columnStyle: ViewProps['style'] = [
    { flexDirection: 'column' },
    flex !== undefined && { flex },
    alignItems && { alignItems },
    justifyContent && { justifyContent },
    flexWrap && { flexWrap },
    width !== undefined && { width },
    height !== undefined && { height },
    padding && { padding: theme.spacing[padding] },
    paddingHorizontal && { paddingHorizontal: theme.spacing[paddingHorizontal] },
    paddingVertical && { paddingVertical: theme.spacing[paddingVertical] },
    margin && { margin: theme.spacing[margin] },
    marginHorizontal && { marginHorizontal: theme.spacing[marginHorizontal] },
    marginVertical && { marginVertical: theme.spacing[marginVertical] },
    gap && { gap: theme.spacing[gap] },
    backgroundColor && { backgroundColor },
    borderRadius && { borderRadius: theme.borderRadius[borderRadius] },
    style,
  ];

  return (
    <View style={columnStyle} testID={testID}>
      {children}
    </View>
  );
}
