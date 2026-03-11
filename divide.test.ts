/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(6, 3)).toBe(2);
  });

  it("divides a negative number by a positive number", () => {
    expect(window.divide(-6, 3)).toBe(-2);
  });

  it("returns 0 when both are 0", () => {
    expect(window.divide(0, 0)).toBe("No se puede dividir por cero, vuelve a intentarlo con otro número");
  });
});

export {};
