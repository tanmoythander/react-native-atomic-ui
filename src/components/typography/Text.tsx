import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useTheme } from '@theme/index';
import type { TextProps } from '../../types/index';

/**
 * Base Text component with theme support
 */
export function Text({ children, variant = 'body1', color, textAlign, style, testID }: TextProps) {
  const { theme } = useTheme();

  const textStyle: RNTextProps['style'] = [
    theme.typography[variant],
    { color: color || theme.colors.text },
    textAlign && { textAlign },
    style,
  ];

  return (
    <RNText style={textStyle} testID={testID}>
      {children}
    </RNText>
  );
}

/**
 * Typography components - Convenience components for common sizes
 */

export function H1(props: TextProps) {
  return <Text {...props} variant={'h1'} />;
}

export function H2(props: TextProps) {
  return <Text {...props} variant={'h2'} />;
}

export function H3(props: TextProps) {
  return <Text {...props} variant={'h3'} />;
}

export function H4(props: TextProps) {
  return <Text {...props} variant={'h4'} />;
}

export function H5(props: TextProps) {
  return <Text {...props} variant={'h5'} />;
}

export function H6(props: TextProps) {
  return <Text {...props} variant={'h6'} />;
}

export function Body1(props: TextProps) {
  return <Text {...props} variant={'body1'} />;
}

export function Body2(props: TextProps) {
  return <Text {...props} variant={'body2'} />;
}

export function Body3(props: TextProps) {
  return <Text {...props} variant={'body3'} />;
}

export function Body4(props: TextProps) {
  return <Text {...props} variant={'body4'} />;
}

export function Body5(props: TextProps) {
  return <Text {...props} variant={'body5'} />;
}

export function Body6(props: TextProps) {
  return <Text {...props} variant={'body6'} />;
}

export function SubTitle1(props: TextProps) {
  return <Text {...props} variant={'subtitle1'} />;
}

export function SubTitle2(props: TextProps) {
  return <Text {...props} variant={'subtitle2'} />;
}

export function Caption(props: TextProps) {
  return <Text {...props} variant={'caption'} />;
}

export function Overline(props: TextProps) {
  return <Text {...props} variant={'overline'} />;
}
