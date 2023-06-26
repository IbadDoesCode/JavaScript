
// JavaScript Interview Question

// function doSomething() {
//     let a = 7
//     {
//         var a = 5
//         console.log(a)
//     }
//     console.log(a)
// }
// doSomething()

// Guess The Output
// A. 5, 7
// B. 5, 5
// C. Error



const arr = [1,2,3,4,5]
const arr1 = arr.slice()
const arr2 = [...arr]
const arr3 = arr.map((val) => val)
const arr4 = arr

console.log(arr == arr1)
console.log(arr == arr2)
console.log(arr == arr3)
console.log(arr == arr4)

// Guess the output
// A. false, false, false, false 
// B. false, true, true, true 
// C. true, true, true, true 
// D. false, false, false, true 