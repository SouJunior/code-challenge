def calc_area_rectangle(b, h): 
    if b < 1 or h < 1:
        return -1
    return b * h
    
print(calc_area_rectangle(10, 11))