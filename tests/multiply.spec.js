const { multiply } = require('./../calculator');

describe('Multiply', () => {
  // Our tests will be added here.

  test('should multiply two positive integers correctly', () => {
    const result = multiply(7, 2);
    expect(result).toBe(14);
  });

  test('should divide two floating point numbers correctly', () => {
    const result = multiply(5, -3);
    expect(result).toBe(-15);
  });

  test('should divide two floating point numbers correctly', () => {
    const result = multiply(5, 0);
    expect(result).toBe(0);
  });
});

/* function multiply(a, b) {
  return a * b;
}
 */
