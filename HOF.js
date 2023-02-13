/* Higher Order Function takes
   one or more functions as arguments
   return a function as its result. */
// E.g. Map is a Higher Order Function.

const add = (num1,num2) => {
    console.log(num1 + num2)
}
const sub = (num1,num2) => {
    console.log(num1 - num2)
}
// Higher Order Function
const mathOp = function(num1,num2,func){
    func(num1,num2)
}
mathOp(3,7,add)