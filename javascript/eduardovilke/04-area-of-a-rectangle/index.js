const area = (base, height) => +base <= 0 || +height <= 0 ? -1 : +base * +height;
console.log(area(10, 11));