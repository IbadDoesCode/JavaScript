// Rest Op with Objects

let Obj = {
    name: "Sam", age: 23,
    address: "Houston",
    salary: 5000
}

const {name, age, ...rest} = Obj
// ...rest is a rest Obj now

console.log(name)
console.log(age)
console.log(rest)
