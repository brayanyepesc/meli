/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  projects: [
    {
      displayName: "frontend",
      preset: "ts-jest",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/src/frontend/**/*.spec.{ts,tsx}"],
    },
    {
      displayName: "backend",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/backend/**/*.spec.{ts,tsx}"],
    },
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.js",
  },
  transform: {
    '\\.(svg)$': 'jest-transform-stub',
  },
};

export default config;
