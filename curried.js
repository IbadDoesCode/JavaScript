// Simple Curried Function
const sum = x => {
    return function (y) {
        return function (z) {
            console.log(x + y + z)
        }
    }
}
// ES6 Curried Function
const add = a => b => c =>
console.log(a + b + c)

add(3)(4)(5)
