/** @returns {Promise<import('jest').Config>} */
module.exports =  async () => {
  return {
    roots: ['<rootDir>/src', '<rootDir>/src/tests'],
    verbose: true,
    testMatch: ['**/tests/**/*.test.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
}