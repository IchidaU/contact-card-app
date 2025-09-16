export default {
  preset: "ts-jest",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
