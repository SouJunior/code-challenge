function reverseArray(array) {
    const reversed = []
    for (let i = array.length - 1; i >= 0; i--) { 
        reversed.push(array[i])
    }
    return reversed
}

console.log(reverseArray([1,2,3,4]))
console.log(reverseArray([9, 9, 2, 3, 4]))
console.log(reverseArray([]))