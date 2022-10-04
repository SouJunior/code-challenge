#!/usr/bin/env ruby

# Public: Somar dois números passados como argumentos
#
# a - O primeiro número.
# b - O segundo número.
#
# Examples:
#
#   soma(1, 2)
#   # => 3
#
# Return: Retorna a soma dos números informados.
def soma(a, b) 
	a + b
end

puts "\n ====== Desafio 2 ======" 

puts ">> Digite o 1° número: "
a = gets.chomp.to_i

puts "\n>> Digite o 2° número: "
b = gets.chomp.to_i

resultadoDaSoma = soma a, b

puts "\n  ====  Resultado  ====" 
puts ">> #{a} + #{b} = #{resultadoDaSoma}" 	