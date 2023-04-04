import {calculate} from "../utils";

describe("Calculate unit", () => {
    test("Fa la suma 1+2=3", () => {
        expect(calculate(1, 2, "+")).toBe(3);
    });
});