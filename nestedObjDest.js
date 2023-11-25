// Nested Destructuring for
// nested structured Objects

const Student = {
    name: 'James',
    scores: {
        phy: 83,
        math: 92
    }
}

const {
    name,
    scores: {phy},
} = Student

console.log(name, phy)