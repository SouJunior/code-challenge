<?php
function reverse($arr)
{
	return array_reverse($arr);
}

echo 'Before Reverse'. PHP_EOL;
print_r(
	 [1, 2, 3, 4, 5]
);

echo 'After Reverse' . PHP_EOL;
print_r(reverse([1, 2, 3, 4, 5]));