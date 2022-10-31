"""
Desafio 4 - calcular a área de um retângulo
"""


def area(l1: [int, float], l2:[int,float]) -> float:
    if isinstance(l1, (int, float)) and isinstance(l2, (int, float)):
        if l1 <= 0 or l2 <= 0:
            raise ValueError('Ambos parâmetros devem ser maior que 0')
        l1 *= l2
        return float(l1)
    else:
        raise TypeError('Todos parâmetros dever ser int ou float')


if __name__ == '__main__':
    print('Executando diretamente a função AREA')
    val_1 = float(input('Digite o primeiro valor:  '))
    val_2 = float(input('Digite o primeiro valor:  '))
    resultado = area(val_2, val_1)
    print(f'O resultado da função area é: {resultado}')
