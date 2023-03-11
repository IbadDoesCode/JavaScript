// Don't Do This
function add (a,b) {
    return a + b
}
function sub (a,b) {
    return a - b
}

// Do This Instead
// DRY - Don't Repeat Yourself
function calculate (a,b,operator) {
    switch (operator) {
        case 'add':
            return a+b
        case 'subtract':
            return a-b
    }
}