import sys


def help_function():
    print("""
    Help - Code Challange
    
    Este pacote realiza 4 atividades:
    \tadd:\t\t\t\tRaliza a adição de 2 numeros.
    \tfootball-points:\t\tRealiza o calculo da pontuação de um time.
    \treverse:\t\t\tInverte uma lista.
    \tarea:\t\t\t\tCalcula a área de um retângulo.
    
    Utilizção:
    
    python code-challange [options] [values]
    
    options:
    -a, --add\t\t\t\tpara usar a função add
    -A, --area\t\t\t\tpara usar a função area
    -f, --football\t\t\tpara usar a função football-challenge
    -r, --reverse\t\t\tpara usar a função reverse
    -h, --help\t\t\t\tpara ver este help menu
    
    Ex:
    python code-challange --add 2 3""")


def func_footer():
    print()
    print('*' * 50)
    print("Do more, do better, don't give up. \ncode-challange by tlsabara - V1.0")


def invalid_args():
    print("""
    O argumento não é valido.
    use --help para saber mais.
    """)


def args_to_float(up_args: list, cls:object=float) -> list:
    v_int = []
    try:
        for v in up_args:
            v_int.append(cls(v))
        return v_int
    except Exception as e:
        print(e)
        sys.exit()


def oraganize_list(up_args: list) -> list:
    return_list = []
    temp_list =  [str(i).replace('[', '').replace(']', '').replace(',', '') for i in up_args]
    for i in temp_list:
        try:
            v = int(i)
        except ValueError:
            try:
                v = float(i)
            except Exception:
                v = i
        finally:
            if v != '':
                return_list.append(v)
    return return_list

if __name__ == '__main__':
   print('Não foi pensado para ser executado assim.')