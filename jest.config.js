module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/examples/'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@theme/(.*)': '<rootDir>/src/theme/$1',
    '@types/(.*)': '<rootDir>/src/types/$1',
    '@utilities/(.*)': '<rootDir>/src/utilities/$1',
    '@advanced/(.*)': '<rootDir>/src/advanced/$1',
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
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-native',
        esModuleInterop: true,
      },
    }],
  },
};
