// Add property to object 
// when condition in True
const condition = true
const obj = {
    id: 01,
    ... (condition && {fruit:"Apple"})
}
console.log(obj)