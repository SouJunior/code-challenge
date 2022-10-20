def areaOfRectangle(b, h): 
    if b <= 0 or h <= 0:
        return -1
    return b * h
    
print(areaOfRectangle(2, 21))