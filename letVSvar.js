// let is block scoped

let x = 1;

if(x === 1)
{
    let x = 2;
    console.log(x) // x=2
}

console.log(x); // x=1

// var is function scoped

var y = 1;

if(y === 1)
{
    var y = 2;
    console.log(y) // x=2
}

console.log(y); // x=2







