module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/examples/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library)/)',
  ],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@theme/(.*)': '<rootDir>/src/theme/$1',
    '@types/(.*)': '<rootDir>/src/types/$1',
    '@utilities/(.*)': '<rootDir>/src/utilities/$1',
    // Mock React Native modules
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/__tests__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 75,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react',
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
        },
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
