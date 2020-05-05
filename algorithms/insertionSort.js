function insertionSort(array) {
    if (array.length <= 1) {
        return array
    }

    for (let i = 1; i < array.length; i++) {
        let elToinsert = array[i]
        let j = i - 1

        while (j >= 0 && array[j] > elToinsert) {
            array[j + 1] = array[j]
            return insertionSort(array)
        }

    }
    return array
}


console.log(insertionSort([3, 2, 8, 5, 35, 83, 75, 981, 62]))
console.log(insertionSort([35, 2, 57, 43, 7, 2, 68, 29, 28, 85, 26]))