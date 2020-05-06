function quickSort(array) {
    if (array.length <= 1) return array

    let pivot = array[array.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([45, 76, 23, 987, 34, 86, 2, 8742, 2, 7, 8, 32, 14, 5, 7, 435, ]))
console.log(quickSort([56, 1, 668, 45, 2, 6, 8, 9, 4, 3, 678, 34, 2, 56, 6, 433, 5]))
console.log(quickSort([56, 23, 98, 345, 76, 24, 86, 12, 6, 14, 59, 4, -24, 75]))