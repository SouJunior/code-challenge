<?php

function addition(int $a, int $b): int
{
	return floor($a + $b);
}

echo $response = (isset($argv[1]) && isset($argv[2])) ? 'Total value is: ' . addition($argv[1], $argv[2]) . PHP_EOL : "Value not set, try again." . PHP_EOL;
