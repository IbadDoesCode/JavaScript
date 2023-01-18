// Function Definition
function sumA(a,b) {
    return a + b
}
sumA(1,2)

// Function Expression
const sumB = function (a,b) {
    return a + b
}
sumB(1,2)

// Arrow Function
const sumC = (a,b) => {
    return a + b
}
sumC(1,2)

// Function Constructor
const sumD = new Function(
    "a",
    "b",
    "return a + b"
)
sumD(1,2)

// IIFE Function
((a,b) => {
    return a + b
})(1,2)
