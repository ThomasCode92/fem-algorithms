import { Config } from "jest";

const config: Config = {
    verbose: true,
    testRegex: ["^.+\\.ts$"],
    preset: "ts-jest",
    clearMocks: true,
    moduleDirectories: ["node_modules", "src"],
    rootDir: "./tests",
    moduleFileExtensions: ["ts", "js"],
};

export default config;
