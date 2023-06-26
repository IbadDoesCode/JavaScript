// Use Shorthand for conditionals
let access = true

// Longhand
if (access) {
    console.log("Acessible!")
}

// Shorthand
access && console.log("Acessible!")


// Don't Do This
if (price.data) {
    return price.data
} else {
    return 'This is Price'
}

// Do This Instead
return (price.data || 'This is Price')
