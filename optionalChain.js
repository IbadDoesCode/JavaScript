const employee = {
    name:'John',
    join: {
        month:"Jan",
        year:2022
    }
}
// const longHand = employee 
// && employee.join 
// && employee.join.year

const shortHand = 
employee?.join?.year
console.log(shortHand)
