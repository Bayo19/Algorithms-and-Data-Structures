function reverseString(string) {

    if (string.length <= 1) {
        return string
    }

    const last = string[string.length - 1]
    const remaining = string.slice(0, -1)
    console.log(last + reverseString(remaining))
    return last + reverseString(remaining)
}

console.log(reverseString('sTein'))