// Three Ways To Convert 
// Set into Array using JS

const mySet = new Set([1,2,3])

const one = [...mySet]
const two = Array.from(mySet)
const three = new Array(...mySet)

console.log(one)
console.log(two)
console.log(three)
