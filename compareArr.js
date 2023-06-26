// Compare JavaScript Arrays

const hasSameElem = (a,b) => {
    return a.length === b.length
    && a.every((v,i) => v === b[i])
}

console.log("hasSameElement: ",
hasSameElem([1, 2], [2, 3])) // False
