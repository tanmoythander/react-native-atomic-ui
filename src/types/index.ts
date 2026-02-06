// Theme types
export interface ColorBank {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  borderLight: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  transparent: string;
  white: string;
  black: string;
  disabled: string;
}

export interface TypographyConfig {
  fontSize: number;
  fontWeight: '400' | '500' | '600' | '700' | '800' | '900';
  lineHeight: number;
  letterSpacing?: number;
}

export interface TypographySystem {
  h1: TypographyConfig;
  h2: TypographyConfig;
  h3: TypographyConfig;
  h4: TypographyConfig;
  h5: TypographyConfig;
  h6: TypographyConfig;
  body1: TypographyConfig;
  body2: TypographyConfig;
  body3: TypographyConfig;
  body4: TypographyConfig;
  body5: TypographyConfig;
  body6: TypographyConfig;
  subtitle1: TypographyConfig;
  subtitle2: TypographyConfig;
  caption: TypographyConfig;
  overline: TypographyConfig;
}

export interface Theme {
  colors: ColorBank;
  typography: TypographySystem;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
  shadows: {
    light: any;
    medium: any;
    heavy: any;
  };
}

export interface ThemeContextValue {
  isDark: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

// Component prop types
export interface BoxProps {
  children?: React.ReactNode;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  padding?: keyof Theme['spacing'];
  paddingHorizontal?: keyof Theme['spacing'];
  paddingVertical?: keyof Theme['spacing'];
  margin?: keyof Theme['spacing'];
  marginHorizontal?: keyof Theme['spacing'];
  marginVertical?: keyof Theme['spacing'];
  gap?: keyof Theme['spacing'];
  backgroundColor?: string;
  borderRadius?: keyof Theme['borderRadius'];
  width?: number | string;
  height?: number | string;
  style?: any;
  testID?: string;
}

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: any;
  testID?: string;
}

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  style?: any;
  testID?: string;
}

export interface CheckBoxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: any;
  testID?: string;
}

export interface RadioButtonProps {
  value: string;
  selected: string;
  onSelect: (value: string) => void;
  label?: string;
  disabled?: boolean;
  style?: any;
  testID?: string;
}

export interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: any;
  testID?: string;
}

export interface ProgressBarProps {
  progress: number; // 0-1
  height?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: keyof Theme['borderRadius'];
  style?: any;
  testID?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  style?: any;
  testID?: string;
}

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  style?: any;
  testID?: string;
}

export interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  initiallyExpanded?: boolean;
  style?: any;
  testID?: string;
}

export interface TextProps {
  children?: React.ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: any;
  testID?: string;
}
