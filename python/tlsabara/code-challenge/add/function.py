"""
Funçaão para somar 2 numeros
"""


def addiction(n1: [int, float], n2: [int, float]) -> float:
    if not isinstance(n1, (int, float)):
        raise TypeError('o valor de n1 deve ser do tipo inteiro ou float.')
    if not isinstance(n2, (int, float)):
        raise TypeError('o valor de n1 deve ser do tipo inteiro ou float.')
    return float(n1 + n2)


if __name__ == '__main__':
    print('Executando diretamente a função ADDICTION')
    val_1 = float(input('Digite o primeiro valor:  '))
    val_2 = float(input('Digite o primeiro valor:  '))
    resultado = addiction(val_2, val_1)
    print(f'O resultado da função addiction é: {resultado}')
