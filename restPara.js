// Rest Parameter allows you to pass 
// as many parameters you want...
let arr = [2,3,4,5]
function sum(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}
console.log(sum(arr))

// Isn't it amazing?