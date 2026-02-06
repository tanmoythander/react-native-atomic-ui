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
  padding?: keyof Theme['spacing'];
  paddingHorizontal?: keyof Theme['spacing'];
  paddingVertical?: keyof Theme['spacing'];
  margin?: keyof Theme['spacing'];
  marginHorizontal?: keyof Theme['spacing'];
  marginVertical?: keyof Theme['spacing'];
  gap?: keyof Theme['spacing'];
  backgroundColor?: string;
  borderRadius?: keyof Theme['borderRadius'];
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
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
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
