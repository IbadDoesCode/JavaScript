// Overusing Global Variables

// Don't Do This
const tax = 0.1
function calculate(price) {
    return price * tax
}

// Do This Instead
function calculate(price) {
    const taxRate = 0.1
    return price * taxRate
}
