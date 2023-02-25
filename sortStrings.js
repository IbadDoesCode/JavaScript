// Sort Array of Strings Alphabetically
const names = [
    'Jack','Kim','David','Sam'
]
names.sort((a,z) => {
    return a.localeCompare(z)
})
console.log(names)