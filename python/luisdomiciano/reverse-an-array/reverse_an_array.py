def reverse (numbers):
  list_reverse = []
  index = len(numbers)-1
  while (index >= 0):
    list_reverse.append(numbers[index])
    index = index - 1
  return list_reverse

print (reverse([1, 2, 3,4]))
print (reverse([9, 9, 2, 3, 4]))
print (reverse([]))