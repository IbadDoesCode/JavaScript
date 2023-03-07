// Clone Objects in JavaScript
const employee = {
    name: 'Smith',
    isOldEmp: true
}
const newEmp = {}
// 1. Using Square Brackets
for (let item in employee) {
    newEmp[item] = employee[item]
}
// 2. Using Object.assign Method
const emp2 = 
Object.assign({}, employee)
// 3. Using new Property
const emp3 = 
Object.assign({dept:"IT"}, employee)
// 4. Using Spread Operator
const oneEmp = { ...employee }