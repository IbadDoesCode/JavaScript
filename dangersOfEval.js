// Avoid Using eval()

function add(x,y) {
    return x + y
}

// Don't Do This
const operation = eval("add(3,5)")

// Do This Instead
const result = add(3,5)