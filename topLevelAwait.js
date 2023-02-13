


// Now in ES2022, you don't need to 
// declare async methods to use await  
// when importing modules in JS
let data

try{
    data = 
    await import('https://google.com')
} catch {
    data = 
    await import('https://yahoo.com')
}