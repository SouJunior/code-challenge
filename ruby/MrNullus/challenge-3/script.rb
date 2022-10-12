#!/usr/bin/env ruby

# Public: Reverte um array informado
#
# arr - Array a ser invertido.
#
# Examples:
#
#   arr = [1, 2, 3]
#
#   reverse(arr)
#
#   # => [3, 2, 1]
#
# Return: Retorna um novo array invertido.
def reverse(arr) 
	arr.reverse!
end

reversed = reverse([1, 2, 3])

items = ""

reversed.each do |item|
	items += " #{item} "
end

puts items
