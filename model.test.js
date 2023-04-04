import Calculadora from "../model";

describe("Calculadora integration", () => {
    test("Fa la suma 1+1=2", () => {
        const calc = new Calculadora()
        calc.set("1")
        calc.set_operator("+")
        calc.set("2")
        const result = calc.operate()
        expect(result).toBe(3)
    });
});