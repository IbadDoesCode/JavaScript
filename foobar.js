// JavaScript Scope

let x = 10 // Global Variable

function foo() {
    console.log(x)
}

function bar() {
    let x = 20 // Local Variable
    foo()
}

bar()
