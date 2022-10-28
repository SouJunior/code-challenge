# Code-challange

### Introdução
Primeiramente atendendo aos requisitos dos desafios foram escritos módulos independentes. As instruções estão dentro de
cada pacote.

### Para executar como um pacote completo:
independente de Sistema Operacional. Basta ter o python(versão 3.x) instalado.

```commandline
python code-challenge --add 5 6
python code-challenge --revese [5, 6, 7, 'bolinha', 7, carro]
python code-challenge -f 10 5 9865
python code-challenge -A 10 10
python code-challenge --help
```

   
### Este pacote realiza 4 atividades:
- **add**:				Raliza a adição de 2 numeros.
- **football-points**:		Realiza o calculo da pontuação de um time, 03 valores obrigatórios.
- **reverse**:			Inverte uma lista.
- **area**:				Calcula a área de um retângulo.

### Utilizção:

python code-challange [options] [values]

### Options:
- **-a, --add**: para usar a função add
- **-A, --area**: para usar a função area
- **-f, --football**: para usar a função football-challenge
- **-r, --reverse**: para usar a função reverse
- **-h, --help**: para ver este help menu

este módulo foi criado usando conceitos de TDD.
Para executar precisa ter o pytest instalado.

```python
pytest -v
```
