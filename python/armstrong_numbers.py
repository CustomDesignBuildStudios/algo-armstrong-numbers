def is_armstrong_number(number):
    number_as_array = [int(x) for x in str(number)]
    armstrong_num = 0
    for num in number_as_array:
        armstrong_num += num**len(number_as_array)
    if armstrong_num == number:
        return True
    else:
        return False
    
def find_armstrong_numbers(numbers):
    armstrong_numbers = []
    for num in numbers:
        if is_armstrong_number(num):
            armstrong_numbers.append(num)
    return armstrong_numbers


