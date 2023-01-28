// A function that calls itself is 
// called a recursive function.

function countDown(number) {
    console.log(number)
    const newNumber = number - 1
    if(newNumber > 0) {
        countDown(newNumber)
    }
}
countDown(5)
