import { describe } from "vitest";
import { LZString } from "../src/main";
import { runAllTests } from "./testFunctions";

describe("src/ (uncompiled)", () => {
    runAllTests(LZString);
});
