// Sort Array of String with Numbers

// if string with number less than 10
// slice it & turn into number & sort

const num = [
    'num 2','num 6','num 1','num 9'
]

// const sorted = num.sort((a,b) => {
//     return +a.slice(-1) - +b.slice(-1)
// })

// console.log(sorted)

// --------------------------


// Strings with Long Numbers

// if numbers bigger than 9 then use
// regular expression to & sort array

const r = /\d+/
const items = [
    'item 77',
    'item 34',
    'item 789',
    'item 6',
    'item 1007',
    'item 1'
]

const sorted = items.sort((a,b) => {
    return a.match(r) - b.match(r)
})

console.log(sorted)