<?php 
/*  
*
* reversed | Irá reverter a ordem de um array informado
*
* @param: array $arr | array a ser invertido
*
* @return: array | é o array já invertido
*
*/
function reversed($arr) {
  $arr_reversed = array();

  for($i = $arr.length - 1; i >= 0; i--) {
    array_push($arr_reversed, $arr[$i]);
  }

  return $arr_reversed;
}

$arr = array(1, 2, 3, 4, 5);

print_r($arr);

print_r(reversed($arr));
?>