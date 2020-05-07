str_1 = 'abc de'
str_2 = 'StEirnerSpEaks'

vowel = 'aeiou'

def count_consonants(str):
    count = 0
    for i in range(len(str)):
        if str[i].lower() not in vowel and str[i].isalpha():
            count += 1
    return count

print(count_consonants(str_2))