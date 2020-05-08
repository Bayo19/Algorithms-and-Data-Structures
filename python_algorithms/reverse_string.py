def reverse_string(str):
    if len(str) <= 1:
        return str
    else:
        last = str[-1]
        remaining = str[0:-1]
        return last + reverse_string(remaining)


(print(reverse_string('hello')))