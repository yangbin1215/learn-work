function sort01(numbers) {
    if (numbers.length > 2) {
        let index = minIndex(numbers);
        let min = numbers[index];
        numbers.splice.call(numbers, index, 1);
        return [min].concat.apply([min], sort01(numbers));

    } else {
        return numbers[0] <= numbers[1] ? numbers : numbers.reverse();
    }
}

function minIndex(numbers) {
    if (numbers.length === 0) return undefined;
    if (numbers.length === 1) return numbers[0];
    let min = 0;
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[min] > numbers[i]) {
            min = i;
        }
    }
    return min;

}

let result = sort01([3, 1, 5, 7, 4, 9]);
console.log(`${result} : result`);