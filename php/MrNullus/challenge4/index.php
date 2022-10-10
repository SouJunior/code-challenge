<?php

/*  
*
* area_rect           | Função para calcular a área do retangulo
*
* @param: int $base   | número inteiro da base
*
* @param: int $altura | número inteiro da altura
*
* Returns: caso sejam validos os parametros retorna a área do retangulo, senão retornara -1
*
*/
function area_rect($base, $altura) {
	$_ERROR = -1;
	
	if (( $base < 1 ) || ( !$altura < 1 )) {
		return $_ERROR;
	}
	
	return ( base * altura );
}

echo area_rect(1, 9);
echo "<br>"
echo area_rect(0, 0);
echo "<br>"
echo area_rect(-1, 12);
echo "<br>"
echo area_rect(9, 12);


?>