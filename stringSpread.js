let string = "string"

// Longhand
let arr = string.split("")
for (let keys of arr) {
    console.log(keys)
}

// Shorthand
console.log(...string)