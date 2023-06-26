
// Looping through Objects 

const dog = {
    breed: 'poodle',
    age : 7
}

// Getting only Values
for (const [key,val] of 
    Object.entries(dog)) {
    console.log(`${val}`)
}
