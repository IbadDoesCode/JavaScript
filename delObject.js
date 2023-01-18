const person = {
    name: 'Smith',
    age: 23,
}

const { age, ...newPerson } = person

console.log(newPerson)