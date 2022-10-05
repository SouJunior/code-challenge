// Wirte a function to reverse an array

// Ex [1,2,3,4] -> [4,3,2,1]


const array = [1,2,3,4];

function reverseArray(array) {
  let newArray = [];

  for(let i = array.length - 1; i >= 0;i--){
    newArray.push(array[i]);
  };

  return newArray;
};


// console.log(reverseArray([4,3,2,1])); // [1, 2, 3, 4];
// console.log(reverseArray(array)); // [4, 3, 2, 1];