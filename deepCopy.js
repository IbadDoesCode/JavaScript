// Deep Copy of JS Objects

// Deep Copy creates a completely new object & copies all nested objects.

let obj = { a: 1, b: { c: 2 } }

let deepCopy = JSON.parse(JSON.stringify(obj))

deepCopy.b.c = 3

console.log(obj.b.c)
