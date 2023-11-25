
// non-curried function
// function multiply (x,y,z) {
//     console.log(x + y + z)
// } // normal functions

// curried function
// const multiply = (a) => {
//     return function (b) {
//         return function (c) {
//             console.log(a*b*c)
//         }
//     }
// }

// multiply(1)(3)(2)

// ES6 Curried Function
const request = greet => name =>
message => console.log(
    greet, name, message
)

request('Hi')('John')('HRU?')