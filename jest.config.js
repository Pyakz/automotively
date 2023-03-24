// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/__tests__/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

export default customJestConfig;
