

const text = 'Hello World'
const words = text.split(' ')
const chars = words.flatMap(
    w => w.split('')
)
console.log(chars)