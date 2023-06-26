// Convert the First Letter 
// of a String into Uppercase

function capitalizeFirstLetter(str){
    const capitalized = str.charAt(0)
    .toUpperCase() + str.slice(1)
    return capitalized
}
const string = 'this is string'
const result = 
capitalizeFirstLetter(string)
console.log(result)