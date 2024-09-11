// Working of the fallback function in JavaScript ES6..

const obj = {
    name: 'John',
    age: 23,
    gender: 'male',
    // removed skill parameter
}

// if there's no parameter you can still show it's value using fallback 

const skill = obj.skill || "C++"
console.log(skill)
