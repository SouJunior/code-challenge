// Reverter a ordem de elementos de um array

const reverseArray = (normalArray) => {
    const revertedArray = [];

    for (let i = normalArray.length-1; i >= 0; i--) {
        revertedArray.push(normalArray[i]);
    }

    return revertedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));