// Sort String in Ascending Order
const text =
'JavaScript is fun and easy'

function toString(data) {
    const arr = data.split(" ")
    arr.sort((a,b) => {
        return a.length-b.length
    })
    return arr.join(" ")
}
console.log(toString(text))