// JS Callback functions

function sum(a,b) {
    return a+b
}

function calculate(x,y,operation) {
    return operation(x,y)
}

console.log(calculate(2,2,sum))
