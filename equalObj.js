// check if two objects are equal?

function areEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

const obj1 = { a: 1, b: {x: 5} }
const obj2 = { a: 1, b: {x: 3} }

console.log(areEqual(obj1, obj2))
