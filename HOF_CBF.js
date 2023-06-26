// HOF & CBF In JS

// Call Back Function
const add = (a,b) => a+b
const sub = (a,b) => a-b

// Higher Order Function
const calculate = (num1, num2, operator) =>
{
    return operator(num1,num2)
}

console.log(calculate(10,5,add))
console.log(calculate(10,5,sub))