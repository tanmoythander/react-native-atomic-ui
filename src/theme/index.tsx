import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import type { ThemeContextValue } from '../types/index';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
}

/**
 * Context-based Theme Provider
 * Provides theme context without requiring Redux
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();
  const isSystemDark = systemColorScheme === 'dark';

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (defaultTheme === 'system') {
      return isSystemDark;
    }
    return defaultTheme === 'dark';
  });

  // Update when system preference changes
  useEffect(() => {
    if (defaultTheme === 'system') {
      setIsDark(isSystemDark);
    }
  }, [isSystemDark, defaultTheme]);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value: ThemeContextValue = {
    isDark,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context in components
 * Must be used within ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { lightTheme, darkTheme } from './themes';
export type { Theme, ThemeContextValue } from '../types/index';
