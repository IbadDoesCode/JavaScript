


function outer() {
    const name = 'Mark'
    function inner() {
        console.log(name)
    }
    return inner()
}
