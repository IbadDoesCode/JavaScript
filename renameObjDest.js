const person = {
    name: "Tim",
    age: 22,
    city: "Berlin"
}
// Assign variables to
// Object properties
const {name,age,city} =
person
// console.log(name)
// console.log(age)
// console.log(city)

// Renaming variables
// using destructuring
const {city: c} = person
console.log(c)