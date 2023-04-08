// Global Scope
const PIE = 3.14
function foo() {
    console.log(PIE)

// Function Scope
    const age = 10
    console.log(age)
}

// Block Scope
if (true) {
    const name = "Mike"
    console.log(name)
}

console.log(PIE) // 3.14
console.log(age) // Error
console.log(name) // Error
