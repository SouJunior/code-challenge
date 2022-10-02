#!/bin/bash
wins="$1*3"
draws="$2*1"
losses="$3*0"
echo "$(($wins+$draws+$losses))"
