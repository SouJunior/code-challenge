"""
Função para o desafio 2
"""


def football_points(wins: int = 0, draws: int = 0, loses: int = 0) -> int:
    for i, v in enumerate([wins, draws, loses]):
        if not v >=0:
            raise ValueError("Todos os parâmetros devem ser maior ou igual a 0")
        if not isinstance(v, int):
            raise TypeError(f'O argumento posição:[{i}] não é um inteiro.')

    wins *= 3
    return wins + draws


if __name__ == '__main__':
    print('Executando diretamente a função FOOTBALL POINTS')
    val_1 = int(input('Digite o numero de vitórias:  '))
    val_2 = int(input('Digite o numero de empates:  '))
    val_3 = int(input('Digite o numero de derrotas:  '))
    resultado = football_points(val_1, val_2, val_3)
    print(f'Com \n\t{val_1} vitórias\n\t{val_2} empates\n\t{val_3} derrotas.\n\nO time tem {resultado} ponto(s).')
