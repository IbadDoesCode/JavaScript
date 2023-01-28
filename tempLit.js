const name = "Jack"
const dept = "IT"
// DON'T DO THIS...
const res = "He is " + name + 
" and works in " + dept + " department."

// INSTEAD DO THIS...
const intro = `My name is ${name} and works in ${dept}.`