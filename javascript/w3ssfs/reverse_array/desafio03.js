const reverseArray = (txt) => {
    const reversed = [];
  
    for (let i = txt.length - 1; i >= 0; i--) {
      reversed.push(txt[i]);
    }
  
    return reversed;
  }

console.log(reverseArray([1,2,3,4,5])); 