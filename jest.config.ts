import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(@supabase|isows))"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__tests__/__mocks__/fileMock.ts",
    "\\.css": "<rootDir>/src/__tests__/__mocks__/styleMock.ts",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/__tests__/__mocks__/",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
