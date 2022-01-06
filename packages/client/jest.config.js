const jestPreset = require("jest-preset-angular/jest-preset");

const { globals } = jestPreset;
const tsjest = globals["ts-jest"];
// set the correct path to the spect ts-config file
// the default for the jest-preset-angular package
// points to an incorrect path:
// <rootDir/src/tsconfig.spec.js
const tsjestOverrides = {
  ...tsjest,
  tsconfig: "<rootDir>/tsconfig.spec.json",
};
const globalOverrides = {
  ...globals,
  "ts-jest": { ...tsjestOverrides },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
// make sure to add in the required preset and
// and setup file entries
module.exports = {
  ...jestPreset,
  testRunner: "jest-jasmine2",
  globals: { ...globalOverrides },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
};
