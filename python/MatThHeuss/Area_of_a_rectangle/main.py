from pickletools import read_uint1
import re


def area(base: int, altura: int):
    if base <=0 or altura <=0: return -1
    else: return base * altura



res = area(0, 2)
print(res)