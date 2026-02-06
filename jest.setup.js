// Jest setup file
require('@testing-library/jest-native/extend-expect');

// Configure React Native Testing Library host component names
// This tells RNTL what our mock component names are
const { configure } = require('@testing-library/react-native');
configure({
  hostComponentNames: {
    text: 'Text',
    textInput: 'TextInput',
    switch: 'Switch',
    scrollView: 'ScrollView',
    modal: 'Modal',
  },
});

global.console = {
  ...console,
  // Keep warnings visible, suppress logs
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: console.warn,
  error: console.error,
};
