#!/usr/bin/env ruby

# Public: Função para calcular a área do retangulo
#
# b - número inteiro da base
# h - número inteiro da altura
#
# Examples:
#
#   puts area_rect(2, 4)
#   # => 8
#
# Return: caso sejam validos os parametros retorna a área do retangulo, senão retornara -1
def area_rec(b, h) 
	error = -1

	if (b < -1  || h < -1) then
		return error
	end

	b * h
end

puts area_rec(2, 4)
puts area_rec(5, 6)
puts area_rec(3, 9)
