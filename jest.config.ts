import { Config } from "jest";

const config: Config = {
    verbose: true,
    preset: "ts-jest",
    clearMocks: true,
    moduleNameMapper: {
        "@code/(.*)": "<rootDir>/src/code/$1",
    },
};

export default config;
