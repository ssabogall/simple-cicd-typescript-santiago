/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the difference of two numbers.
 * @param a 
 * @param b 
 * @returns a - b
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 
 * @param a 
 * @param b 
 * @returns a * b
 */
function multiply(a: number, b: number): number {
  return a * b;
}
/**
 * 
 * @param a 
 * @param b 
 * @returns a / b
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero, vuelve a intentarlo con otro número");
  }
  return a/b;
}


// Expose to window so the HTML script can call it
(window as unknown as { sum: typeof sum }).sum = sum;
(window as unknown as { subtract: typeof subtract }).subtract = subtract;
(window as unknown as { multiply: typeof multiply }).multiply = multiply;
(window as unknown as { divide: typeof divide }).divide = divide;