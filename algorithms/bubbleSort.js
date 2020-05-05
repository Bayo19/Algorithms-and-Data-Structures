function bubbleSort(array) {

    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
            return bubbleSort(array)
        }
    }
    return array
}


console.log(bubbleSort([3, 2, 8, 5, 8, 3, 9, 25, 74, 62, 83, 35, 83, 75, 981, 62]))