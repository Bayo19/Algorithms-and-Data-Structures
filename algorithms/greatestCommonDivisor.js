function greatestCommonDivisor(num1, num2) {
    return num2 === 0 ? num1 : greatestCommonDivisor(num2, num1 % num2)
}