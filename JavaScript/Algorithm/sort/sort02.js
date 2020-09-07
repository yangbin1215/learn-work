//选择排序
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
console.log(`选择排序 : ${result}`); // PASS

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(
        [pivot], quickSort(right))
}

result = quickSort([3, 1, 5, 7, 4, 9]);
console.log(`快速排序 : ${result}`); // PASS

//归并排序
function mergeSort(arr) {
    let l = arr.length;
    if (l === 1) return arr;
    let left = arr.slice(0, Math.floor(l / 2));
    let right = arr.slice(Math.floor(l / 2));
    return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
    if (a.length === 0) {
        return b
    }
    if (b.length === 0) {
        return a
    }
    return a[0] < b[0] ?
        [a[0]].concat(merge(a.slice(1), b)) :
        [b[0]].concat(merge(a, b.slice(1)))
}

result = mergeSort([3, 1, 5, 7, 4, 9]);
console.log(`归并排序 : ${result}`); // PASS

// 计数排序
function countSort(arr) {
    let hashTable = {}, max = 0, result = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1;
        } else {
            hashTable[arr[i]] += 1;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let j = 0; j <= max; j++) {
        if (j in hashTable) {
            for (let i = 0; i < hashTable[j]; i++) {
                result.push(j);
            }
        }
    }
    return result;
}

result = countSort([3, 1, 5, 7, 5, 4, 9, 2]);
console.log(`计数排序 : ${result}`); // PASS