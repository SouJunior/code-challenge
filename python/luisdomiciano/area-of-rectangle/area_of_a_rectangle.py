def area(side1, side2):
    if (side1 <= 0 or side2 <= 0):
        return -1
    else:
        return side1 * side2

print (area(3, 4))
print (area(10, 11))
print (area(-1, 5))
print (area(0, 2))
