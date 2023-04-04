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

describe("Operació one value", () => {
    test("Veure si nomes hi ha un valor, retornar-lo: 1", () => {
        const calc = new Calculadora()
        calc.set("1")
        const result = calc.operate()
        expect(result).toBe("1")
    });
});

describe("Operació, not operator", () => {
    test("No operador, retornar segon valor: 12", () => {
        const calc = new Calculadora()
        calc.set("1")
        calc.set("")
        calc.set("2")
        const result = calc.operate()
        expect(result).toBe("12")
    });
});

describe("Operació, undefined", () => {
    test("Undefined value, retornar: Error", () => {
        const calc = new Calculadora()
        const result = calc.operate()
        expect(result).toBe("Error")
    });
});