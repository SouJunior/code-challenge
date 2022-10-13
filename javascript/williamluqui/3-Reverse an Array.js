function reverse(arr) {
    var ret = new Array;
    for(var i = arr.length-1; i >= 0; i--) {
        ret.push(arr[i]);
    }
    return ret;

}
console.log(reverse([]))