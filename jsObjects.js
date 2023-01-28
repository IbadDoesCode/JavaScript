
// If the variable name and object key 
// name are the same then we can just 
// mention the variable name in object 
// literals instead of both key & value.

const firstName = 'Ibad'
const lastName = 'Codes'

// Longhand
const longObj = {
    firstName: firstName, 
    lastName: lastName
}

// Shorthand
const shortObj = {firstName,lastName}