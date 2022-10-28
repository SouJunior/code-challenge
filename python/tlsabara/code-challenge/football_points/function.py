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
     print(football_points(10,5,99))
