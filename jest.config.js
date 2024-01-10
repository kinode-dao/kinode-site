module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    moduleFileExtensions: ['js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['**/*.js'],
    coverageReporters: ['lcov', 'text-summary'],
};
