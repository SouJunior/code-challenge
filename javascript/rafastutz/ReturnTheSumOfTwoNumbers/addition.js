function addition(a,b) {
    const validation = [a, b].every(element => typeof element === 'number') ? "Valid" : "Invalid"
    if(validation === 'Invalid') return "Check your inputs"
    return a + b
}

// Teste
console.log(addition(10,20))
console.log(addition("a",20))
