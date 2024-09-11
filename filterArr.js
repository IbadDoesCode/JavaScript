// Don't do filtering an array with filter like this

let num = [1,2,3,4,5,6,7]

// Don't do this
let evenNum = num.filter(function(num) {
    return num % 2 === 0
})
console.log(evenNum)

// Do this instead
let evenNumbers = num.filter(num => num % 2 === 0)
console.log(evenNumbers)