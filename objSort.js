// Sort Array of Objects based on IDs

const objArr = [
    { id: 4, name: 'James' },
    { id: 7, name: 'Olive' },
    { id: 13, name: 'Kim' },
    { id: 24, name: 'John' },
    { id: 1, name: 'Max' }
]

const sorted = objArr.sort((a,b) => {
    return a.id - b.id
})

console.log(sorted)
