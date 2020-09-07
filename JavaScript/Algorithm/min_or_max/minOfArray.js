function minOfArray(numbers) {
    if (numbers.length > 2){
        return minOfArray(
            [numbers[0], minOfArray(numbers.slice(1))]
        )
    }else {
        return Math.min.apply(null, numbers);
    }
}

module.exports = minOfArray