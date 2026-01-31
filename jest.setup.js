// Jest setup file
global.console = {
  ...console,
  // Keep warnings visible, suppress logs
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: console.warn,
  error: console.error,
};
