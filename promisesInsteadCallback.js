
// Use Promises instead of Callbacks
fs.readFile('file.txt', 
function(err,data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// Promise
fs.promises.readFile("file.txt")
.then(data => {
    console.log(data)
}).catch( err => {
    console.log(err)
})