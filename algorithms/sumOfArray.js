function sum(array) {
    if (array.length === 0) {
        return 0
    }


    const lastElement = array.pop()
    return lastElement + sum(array)
}

console.log(sum([64, 60, 30, 28, 26, 23]))