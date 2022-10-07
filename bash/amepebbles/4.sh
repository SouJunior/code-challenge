#!/bin/bash
[[ $1 -le 0 || $2 -le 0 ]] && echo "-1" || echo $(($1*$2))
