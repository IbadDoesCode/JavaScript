// JavaScript Method, It is function 
// which is an Object Property
const user = {
    name: "sam",
    userDetails: function(){
        console.log(this.name)
    }
}
user.userDetails() // A Method

// JavaScript Function
function sum(x,y) {
    return x + y
}
sum(3,7) // A Function