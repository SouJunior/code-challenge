let arr = [2, 3, 4, 5];

function median(arr: number[]): number {
  return arr[Math.floor((arr.length - 1) / 2)];
}


console.log(median(arr));