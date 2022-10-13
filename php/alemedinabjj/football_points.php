<?php

function footballPoints($wins, $draws, $losses) {
  return $wins * 3 + $draws;
}

print_r(footballPoints(3, 4, 2));