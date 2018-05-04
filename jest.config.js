module.exports = {
  testMatch: ['**/(*.)spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**'
  ],
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['json', 'html'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      enableTsDiagnostics: true
    }
  }
};
