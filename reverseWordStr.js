// Reverse Each Word of a String
const text = 'JavaScript is awesome'

function reverseStr(data) {
    const arr = data.split(" ")
    const result = arr.map(d => {
        return d.split("").
        reverse().join("")
    })
    return result.join(" ")
}

console.log(reverseStr(text))