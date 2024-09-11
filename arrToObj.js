// Convert this Array into Object
// [['a', 1],['b', 2],['c', 3]]
// to
// { a: 1, b: 2, c: 3 }

const arr = [
    ['a', 1],['b', 2],['c', 3]
]
const obj = Object.fromEntries(arr)

console.log(obj)
