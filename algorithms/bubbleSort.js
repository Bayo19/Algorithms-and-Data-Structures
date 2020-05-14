function bubbleSort(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            return bubbleSort(array)
        }
    }
    return array
}


console.log(bubbleSort([3, 2, 8, 5, 35, 83, 75, 981, 62]))
console.log(bubbleSort([35, 2, 57, 43, 7, 2, 68, 29, 28, 85, 26]))