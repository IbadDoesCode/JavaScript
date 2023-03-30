// Using IIFEs for Data Privacy

//IIFE is a way to create a function
//that runs immediately after it's
//defined and create a private 
//scope for variables.

(function (){
    let secret = 'A secret'
})()

console.log(secret)
// So this will show an error in
// console.