module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // testMatch: ["**/test/**/*.test.(ts|js)"],
  testMatch: ["**/test/**/*.test.ts"],
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
};
