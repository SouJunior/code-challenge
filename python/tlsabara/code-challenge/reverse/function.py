"""
Função do reverse
"""

def reverse(to_revert: list) -> list:
    """
    Função que reverte a ordem de uma lista
    :param to_revert:
    :return:
    """
    if isinstance(to_revert, list):
        return to_revert[::-1]
    else:
        raise TypeError(f'O parâmetro "to_tevert" deve ser uma lista e não do tipo: {type(to_revert)}')


if  __name__ == '__main__':
    l = [1, 2, 3, 4, 5]
    print(reverse(l))
