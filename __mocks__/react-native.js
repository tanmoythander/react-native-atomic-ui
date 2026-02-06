// Mock for react-native
const React = require('react');

const mockComponent = (name) => {
  return React.forwardRef((props, ref) => {
    return React.createElement(name, { ...props, ref });
  });
};

module.exports = {
  View: mockComponent('View'),
  Text: mockComponent('Text'),
  TouchableOpacity: mockComponent('TouchableOpacity'),
  Pressable: mockComponent('Pressable'),
  TextInput: mockComponent('TextInput'),
  Switch: mockComponent('Switch'),
  ScrollView: mockComponent('ScrollView'),
  FlatList: mockComponent('FlatList'),
  StyleSheet: {
    create: (styles) => styles,
    flatten: (style) => style,
  },
  Platform: {
    OS: 'ios',
    select: (obj) => obj.ios || obj.default,
  },
  Dimensions: {
    get: () => ({ width: 375, height: 812 }),
  },
  Animated: {
    View: mockComponent('Animated.View'),
    Text: mockComponent('Animated.Text'),
    timing: jest.fn(() => ({
      start: jest.fn(),
    })),
    spring: jest.fn(() => ({
      start: jest.fn(),
    })),
    Value: jest.fn().mockImplementation((value) => ({
      setValue: jest.fn(),
      interpolate: jest.fn(() => value),
      __getValue: jest.fn(() => value),
    })),
  },
  useColorScheme: jest.fn(() => 'light'),
};
