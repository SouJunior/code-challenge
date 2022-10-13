<?php
function areaOfRectangle($length, $width) {
    if ($length < 0 || $width < 0) return -1;
    
  return $length * $width;
}

print_r(areaOfRectangle(-1, 5));

