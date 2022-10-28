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


if __name__ == '__main__':
    print('Executando diretamente a função FOOTBALL POINTS')
    item = ''
    lista = []
    while item != '***':
        item = input(f'Digite o valor {len(lista)+1} da lista ou *** para encerrar.\n\n>>> ')
        if item != '***':
            lista.append(item)
    print(f'\n\nSua lista ficou\n{lista}')
    resultado = reverse(lista)
    print(f'Com os valores fornecidos, o inverso fica:\n\n{resultado} ')
