<?php

function footballPoints(int $win, int $draw, int $loss): int
{

	return floor($win * 3) + ($draw * 1) + ($loss * 0);

}

echo $response = (isset($argv[1]) && isset($argv[2]) && isset($argv[3])) ? 'Total points is: ' . footballPoints($argv[1], $argv[2], isset($argv[3])) . PHP_EOL : "Values not set correctly, try again." . PHP_EOL;
