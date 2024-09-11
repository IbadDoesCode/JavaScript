// Shallow Copy of JS Objects

// Shallow Copy creates a new object but it only copies the references

let obj = { a: 1, b: { c: 2 } }

let shallowCopy = Object.assign({}, obj)

shallowCopy.b.c = 3

console.log(obj.b.c)
