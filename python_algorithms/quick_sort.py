number = [3,6,4,2,9,6,57,38,4,3,7824,46,2]

def quick_sort(n):
        
    if len(n) <= 1:
        return n
    else:
        pivot = n.pop()
        left = []
        right = []
        for item in n:
            if item < pivot:
                left.append(item)
            else:
                right.append(item)
        return quick_sort(left) + [pivot]+ quick_sort(right)


print(quick_sort(number))
