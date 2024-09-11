// Object freeze method in JS

const obj = { a: 1, b: 2 }
Object.freeze(obj)
obj.a = 10
console.log(obj.a)
