const sumValuesFromString = require('./sumValuesFromString');

test('sums the numbers from a comma-separated string', () => {
    const input = "1,5,4,3,2";
    const expectedOutput = 15;

    expect(sumValuesFromString(input)).toBe(expectedOutput);
});

test('returns 0 for empty string', () => {
    const input = "";
    const expectedOutput = 0;

    expect(sumValuesFromString(input)).toBe(expectedOutput);
});

test('handles single value string', () => {
    const input = "7";
    const expectedOutput = 7;

    expect(sumValuesFromString(input)).toBe(expectedOutput);
});
