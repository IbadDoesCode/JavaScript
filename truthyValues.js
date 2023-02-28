const values =
    [null, false, 'value', 0, true]

// return only true values
console.log(values.filter(Boolean))

// return true if all values are true
console.log(values.every(Boolean))

// true if atleast one value is true
console.log(values.some(Boolean))