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

// Suppress react-test-renderer deprecation warnings from React 19
// These warnings are from the underlying library dependency and don't affect functionality
const originalStderrWrite = process.stderr.write.bind(process.stderr);
process.stderr.write = (chunk, encoding, callback) => {
  if (
    typeof chunk === 'string' &&
    chunk.includes('react-test-renderer is deprecated')
  ) {
    return true;
  }
  return originalStderrWrite(chunk, encoding, callback);
};

// Console mocking for cleaner test output
global.console = {
  ...console,
  // Keep warnings and errors visible, suppress logs
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: console.warn,
  error: console.error,
};
