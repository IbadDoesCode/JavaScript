// Don't Iterate array like this using forEach

let fruits = ['apple', 'mango', 'melon', 'grapes']

// Don't do this
fruits.forEach(function(item) {
    // console.log(item)
})

// Instead do this
fruits.forEach((item) => console.log(item))
