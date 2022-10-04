<?php
function footballPoints($wins, $draws, $losses) {
	$winsPoints = $wins * 3;
	$losses = 0;
	return $winsPoints + $draws + $losses;
}

echo footballPoints(3, 4, 0);