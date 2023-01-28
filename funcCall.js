function f1() {
    console.log('Function One')
}
function f2() {
    console.log('Function Two')
}
let condition

// Longhand
if (condition) {
    f1()
} else {
    f2()
}
  
// Shorthand
(condition ? f1 : f2)()