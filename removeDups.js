//Remove duplicates from array in JS

let num = [1, 2, 3, 3, 4, 4, 5, 5, 6]

// 1. filter() - Longhand
let filtered = num.filter((a, b) => 
num.indexOf(a) === b)
console.log(filtered)

// 2. Set() - Shorthand
const removeDups = (arr) =>
[... new Set(arr)]
console.log(removeDups(num))