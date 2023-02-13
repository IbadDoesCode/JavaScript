
// A function passed as an argument is
// called a Callback Function
function sum(func){
    console.log(func())
}
sum(function(){
    return 2 + 2
})
