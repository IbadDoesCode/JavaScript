// For-await-of in JS
// Access all distinct properties

const getFruits = [
    Promise.resolve('apple'),
    Promise.resolve('banana'),
    Promise.resolve('orange'),
]

async function logFruits () {
    for await (const fruit of getFruits) {
        console.log(fruit)
    }
}

logFruits()