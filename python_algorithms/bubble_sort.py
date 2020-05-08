def bubble(array):
    end = len(array)-1
    for i in range(0, end):
        if array[i] > array[i+1]:
            array[i], array[i+1] = array[i+1], array[i]
            return bubble(array)
    return array


print(bubble([35, 2, 57, 43, 7, 2, 68, 29, 28, 85, 26]))
print(bubble([3, 2, 8, 5, 35, 83, 75, 981, 62]))