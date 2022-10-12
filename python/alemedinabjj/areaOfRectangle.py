def areaOfRectangle(length, width):

    if length <= 0 or width <= 0:
        return -1

    return length * width

if __name__ == "__main__":
    print(areaOfRectangle(10, 11))