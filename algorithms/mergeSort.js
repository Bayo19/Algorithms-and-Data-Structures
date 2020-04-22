console.clear()
let log = console.log()


const merge = function(left, right) {

    const result = []

    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

//-----------------
const mergeSort = function(nums) {

        const sortedArray = [...nums]

        if (sortedArray.length < 2) {
            return nums
        }

        const length = sortedArray.length
        const middle = Math.floor(length / 2)
        const left = sortedArray.slice(0, middle)
        const right = sortedArray.slice(middle)

        return merge(mergeSort(left), mergeSort(right))
    }
    //--------------------

console.log(mergeSort([4, 5, 6, 8, 9, 0, 2]))