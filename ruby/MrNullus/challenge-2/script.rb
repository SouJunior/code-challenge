#!/usr/bin/env ruby

# Public: Calcula os pontos que um time de futebol obteve
#
# wins   - O número de vitorias.
# draws  - O número de empates.
# losses - O número de derrotadas
#
# Examples:
#
#   football_points(3, 4, 2)
#   # => 13
#
# Return: Retorna o total de pontos de um time de football.
def football_points(wins, draws, losses) 

	total_points = (3 * wins) + (draws * 1)

	return total_points

end

puts "\n ====== Desafio 2 ======" 

puts ">> Número de vitórias: "
number_of_wins = gets.chomp.to_i

puts "\n>> Número de empates: "
number_of_draws = gets.chomp.to_i

puts "\n>> Número de derrotas: "
number_of_losses = gets.chomp.to_i

total_points = football_points(
	number_of_wins, number_of_draws, number_of_losses
);

puts "\n  ====  Resultado  ====" 
puts ">> Total de Pontos | #{total_points}" 	
puts "-------------------------- "
puts ">> Vitorias [#{number_of_wins}]"
puts ">> Empates  [#{number_of_draws}]"
puts ">> Derotas  [#{number_of_losses}]"
puts "-------------------------- "
