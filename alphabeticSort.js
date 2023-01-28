


const array = ['e','a','c','d','b']
function alphabetSort(arr) {
    return arr.sort((a,b) =>
    a.localeCompare(b))
}
console.log(alphabetSort(array))