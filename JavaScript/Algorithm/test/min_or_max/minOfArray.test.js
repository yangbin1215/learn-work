const minOfArray = require('../../min_or_max/minOfArray');

test('min of array is 1', () => {
    expect(minOfArray([1,2,3,4,5,6]).toBe(1));
});