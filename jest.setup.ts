export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "js-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };