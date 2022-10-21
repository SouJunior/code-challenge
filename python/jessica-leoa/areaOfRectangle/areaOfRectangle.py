from ast import And


def areaRectangle(width, height):
  if width > 0 and height > 0:
    area = width * height
  else: 
    area = - 1
  return print("The area of the triangle is ", area)
