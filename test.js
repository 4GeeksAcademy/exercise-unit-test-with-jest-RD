// Import all required functions at the top once
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test for sum()
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Test for fromEuroToDollar()
test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Test for fromDollarToYen()
test("One dollar should be approximately 146.26 yen", () => {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

// Test for fromYenToPound()
test("One yen should be approximately 0.00556 pounds", () => {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});
