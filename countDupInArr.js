// Count Duplicates in JS Array
const elements = [
    "Cars","Bikes","Trucks","Cart",
    "Cars","Bikes","Cart",
    "Cars","Bikes","Cart",
    "Cars","Bikes",
]
function countDups(data) {
    const output = {}
    data.forEach(d => {
        output[d] = 
        (output[d] || 0) +1
    })
    return output
}
console.log(countDups(elements))