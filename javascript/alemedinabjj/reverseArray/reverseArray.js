//aqui temos uma forma de fazer o reverse de um array usando o reduce

const reverse = (array = []) => array.reduce((acc, curr) => [curr, ...acc], []);
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//aqui temos outra forma de fazer o reverse de um array usando o for e o push

const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//aqui temos outra forma de fazer o reverse de um array usando reverse do array

const reverseAnArray = (array = []) => array.reverse();

console.log(reverseAnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
