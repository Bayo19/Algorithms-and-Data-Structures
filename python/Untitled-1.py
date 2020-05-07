def quick_sort(n):
    
    if len(n) <= 1:
        return n
    else:
        pivot = n.pop()

    right = []
    left = []

    for item in n:
        if item < pivot:
            left.append(item)
        else:
            right.append(item)

    return quick_sort(left) + [pivot] + quick_sort(right)