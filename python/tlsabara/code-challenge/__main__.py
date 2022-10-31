#!/usr/bin/python3
import sys

from add.function import addiction
from football_points.function import football_points
from area.function import area
from reverse.function import reverse
from utils.functions import help_function, func_footer, invalid_args, args_to_float, oraganize_list

sys_args = None
try:
    sys_args = sys.argv
except Exception as e:
    print(f'Erro: {e}')


PARAMS = [
    '-a', '--add',
    '-A', '--area',
    '-f', '--football',
    '-r', '--reverse'
    '-h', '--help'
]

if '-h' in sys_args or '--help' in sys_args or len(sys_args) == 1:
    help_function()
    func_footer()
    sys.exit()

method = sys_args[1]
values = [sys_args[i] for i in range(len(sys_args)) if i > 1]

if method in PARAMS:
    if len(values) == 2:
        v_int = args_to_float(values)
        if method in ('-a', '--add'):
            print(addiction(v_int[0], v_int[1]))
        if method in ('-A', '--area'):
            print(area(v_int[0], v_int[1]))

    if len(values) == 3:
        v_int = args_to_float(values, int)
        if method in ('-f', '--football'):
            print(football_points(v_int[0], v_int[1], v_int[2]))

    if method in ('-r', '--reverse'):
        values = oraganize_list(values)
        print(reverse(values))
else:
    invalid_args()
