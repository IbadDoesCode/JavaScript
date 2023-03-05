const obj = {
    name: 'James',
    age: 34,
    update() {}
}
// First Way
const newObj = { ...obj }
console.log(newObj)

// Second Way
const bestObj = JSON.parse(JSON.stringify(obj))
console.log(bestObj)
