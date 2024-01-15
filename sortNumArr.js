// Sort an Array of Numbers

// pass a callback function which
// will handle comparison of values

const numbers = [23,5,40,1,101,63]

const sortNum = numbers.sort(
    (a,b) => a-b
)

console.log(sortNum)
