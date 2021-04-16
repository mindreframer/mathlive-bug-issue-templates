// jest.config.js
module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg|wav)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
