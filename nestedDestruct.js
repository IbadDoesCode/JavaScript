// Nested Destructuring

let {
    name,
    details: { age },
} = { name: 'John', details: { age:9 } }

console.log(age)
console.log(name)
