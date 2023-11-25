//swap two numbers without third no.

let a = 5
let b = 7

console.log('before swap: ', 
    'a:', a, 'b:', b)

a ^= b
b ^= a
a ^= b

console.log('after swap: ', 
    'a:', a, 'b:', b)

    // LATEST WAY