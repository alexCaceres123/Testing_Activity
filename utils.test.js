import {calculate} from "../utils";

describe("Calculate unit", () => {
    test("Fa la suma 1+2=3", () => {
        expect(calculate(1, 2, "+")).toBe(3);
    });
});

describe("Calculate unit", () => {
    test("Fa la resta 2-1=1", () => {
        expect(calculate(2, 1, "-")).toBe(1);
    });
});

describe("Calculate unit", () => {
    test("Fa la multipliació 2*2=4", () => {
        expect(calculate(2, 2, "*")).toBe(4);
    });
});

describe("Calculate unit", () => {
    test("Fa la divisió 2/2=1", () => {
        expect(calculate(2, 2, "/")).toBe(1);
    });
});