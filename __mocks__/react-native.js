// Comprehensive React Native mock for Jest testing
const React = require('react');

// Helper to create mock React Native components
const createMockComponent = (name) => {
  const component = React.forwardRef((props, ref) => {
    return React.createElement(name, { ...props, ref }, props.children);
  });
  component.displayName = name;
  return component;
};

// Core components used across the library
const View = createMockComponent('View');
const Text = createMockComponent('Text');
const TextInput = createMockComponent('TextInput');
const TouchableOpacity = createMockComponent('TouchableOpacity');
const Pressable = createMockComponent('Pressable');
const ScrollView = createMockComponent('ScrollView');
const FlatList = createMockComponent('FlatList');
const ActivityIndicator = createMockComponent('ActivityIndicator');

// Switch needs special handling for value/onValueChange props
const Switch = createMockComponent('Switch');

// StyleSheet mock
const StyleSheet = {
  create: (styles) => styles,
  flatten: (style) => {
    if (Array.isArray(style)) {
      return Object.assign({}, ...style.filter(Boolean));
    }
    return style || {};
  },
  hairlineWidth: 1,
};

// Platform mock
const Platform = {
  OS: 'ios',
  Version: 14,
  select: (obj) => obj.ios ?? obj.default,
  isPad: false,
  isTVOS: false,
  isTV: false,
};

// UIManager mock (used by Collapsible for LayoutAnimation)
const UIManager = {
  setLayoutAnimationEnabledExperimental: jest.fn(),
  measure: jest.fn(),
  measureInWindow: jest.fn(),
};

// LayoutAnimation mock (used by Collapsible)
const LayoutAnimation = {
  configureNext: jest.fn(),
  create: jest.fn(),
  Types: {
    spring: 'spring',
    linear: 'linear',
    easeInEaseOut: 'easeInEaseOut',
    easeIn: 'easeIn',
    easeOut: 'easeOut',
  },
  Properties: {
    opacity: 'opacity',
    scaleX: 'scaleX',
    scaleY: 'scaleY',
    scaleXY: 'scaleXY',
  },
  Presets: {
    easeInEaseOut: { create: { type: 'easeInEaseOut', property: 'opacity' } },
    linear: { create: { type: 'linear', property: 'opacity' } },
    spring: { duration: 700, create: { type: 'linear', property: 'opacity' } },
  },
};

// Dimensions mock
const Dimensions = {
  get: jest.fn().mockReturnValue({ width: 375, height: 812, scale: 2, fontScale: 1 }),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

// Animated mock
const AnimatedValue = jest.fn().mockImplementation((value) => ({
  _value: value,
  setValue: jest.fn(),
  setOffset: jest.fn(),
  flattenOffset: jest.fn(),
  extractOffset: jest.fn(),
  addListener: jest.fn(() => '1'),
  removeListener: jest.fn(),
  removeAllListeners: jest.fn(),
  stopAnimation: jest.fn((cb) => cb && cb(value)),
  resetAnimation: jest.fn((cb) => cb && cb(value)),
  interpolate: jest.fn(() => ({ __getValue: () => value })),
  __getValue: () => value,
}));

const Animated = {
  View: createMockComponent('Animated.View'),
  Text: createMockComponent('Animated.Text'),
  Image: createMockComponent('Animated.Image'),
  ScrollView: createMockComponent('Animated.ScrollView'),
  FlatList: createMockComponent('Animated.FlatList'),
  Value: AnimatedValue,
  ValueXY: jest.fn().mockImplementation(() => ({
    x: new AnimatedValue(0),
    y: new AnimatedValue(0),
    setValue: jest.fn(),
    setOffset: jest.fn(),
    flattenOffset: jest.fn(),
    extractOffset: jest.fn(),
    stopAnimation: jest.fn(),
    resetAnimation: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    getLayout: jest.fn(() => ({ left: 0, top: 0 })),
    getTranslateTransform: jest.fn(() => [{ translateX: 0 }, { translateY: 0 }]),
  })),
  timing: jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  spring: jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  decay: jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  parallel: jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  sequence: jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  loop: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  event: jest.fn(() => jest.fn()),
  createAnimatedComponent: jest.fn((component) => component),
};

// useColorScheme hook mock (used by ThemeProvider)
const useColorScheme = jest.fn(() => 'light');

module.exports = {
  // Components
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Switch,
  // APIs
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
  Dimensions,
  Animated,
  // Hooks
  useColorScheme,
  // Types (empty - handled by TypeScript)
  ViewProps: {},
  TextProps: {},
};
