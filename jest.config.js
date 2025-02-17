const path = require('path');

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'jsdom',
  roots: [path.join(__dirname, 'src')],
};
