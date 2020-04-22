console.clear()
let log = console.log

let data = [2, 4, 5, 7, 8, 9, 12, 14, 17, 19, 22, 25, 27, 28, 33, 37]

let binarySearch_iterative = function(data, target) {
    let low = 0
    let high = data.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (target == data[mid]) {
            return true
        } else if (target > data[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false
}

let binarySearch_recursive = function(data, target, low, high) {
    if (low > high) {
        return false
    }

    let mid = Math.floor((low + high / 2))

    if (target == data[mid]) {
        return true
    } else if (target < data[mid]) {
        return binarySearch_recursive(data, target, low, mid - 1)
    } else {
        return binarySearch_recursive(data, target, mid + 1, high)
    }
}

let target = 25


log(binarySearch_iterative(data, target))
log(binarySearch_iterative(data, target, 0, data.length - 1))