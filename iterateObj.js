// iterate objects using for..in & for..of

const Student = {
    name: 'James',
    class: 9,
    passed: true,
}

for (let key in Student) {
    console.log(`${key}: ${Student[key]}`)
}
