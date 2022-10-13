<?php

declare(strict_types=1);

function areaRectangle($length, $width)
{
	if ($length < 0 || $width < 0) return -1;

	return $length * $width;
}

echo $response = (isset($argv[1]) && isset($argv[2])) ? 'Area: ' . areaRectangle($argv[1], $argv[2]) . PHP_EOL : "Values not set correctly, try again." . PHP_EOL;