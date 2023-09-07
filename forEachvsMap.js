const num = [1,2,3,4,5,6,7]

// Don't do this

const squared = []
num.forEach(number => {
    squared.push(number * number)
})

// Do this instead
squared = num.map(
    number => number * number
)
