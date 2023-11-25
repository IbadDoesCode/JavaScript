// Pure Function in JS

// Impure Function
function ImpureFact(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
// it modifies global var result
// which is impure & bad
}

// Pure Function
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}
// it doesn't modify any global var 
// hence pure & good to use!
