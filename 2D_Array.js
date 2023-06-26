// Create a two Dimensional Array 
// in JavaScript

function twoDimensionalArray(a,b) {
    let arr = []

    // Creating 2D Array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++){
            arr[i] = []
        }
    }

    // Inserting elements to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++){
            arr[i][j] = j
        }
    }
    return arr
}

const x = 2
const y = 3

const res = twoDimensionalArray(x,y)
console.log(res)