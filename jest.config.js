module.exports = {
  roots: ["<rootDir>/tests"],
  preset: "@shelf/jest-mongodb",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/tests/**/*.ts", "!src/main/**"],
  coverageDirectory: "coverage",
  testMatch: ["<rootDir>/tests/**/*.(spec).{js,jsx,ts,tsx}"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
