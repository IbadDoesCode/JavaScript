// *** JavaScript Loops ***

// For Loop
for (let i = 0; i < 5; i++ ) {
    console.log(i);
} // Output: 0 1 2 3 4

// while
let j = 0;
while (j < 5) {
    j++;
    console.log(j);
} // Output: 1 2 3 4 5

// do-while
let i = 0;
do{
    i++;
    console.log(i);
} while(i < 5); // Output: 1 2 3 4 5

// for in
const arr = [1,2,5];
arr.foo = "hello";
for (let i in arr) {
    console.log(i);
} // Output: 0 1 2 foo

// for of
const myArr = [2,4,5];
myArr.foo = "hello";
for (let i of myArr) {
    console.log(i);
} // Output: 2 4 5