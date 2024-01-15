// truncate string to specific length

const truncate = (str, len) => 
str.length > len ? str.slice(0, len) 
+ '...' : str

let str = 'let us discuss this line'
let len = 14

console.log(truncate(str,len))
