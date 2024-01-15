// how many d/f letters in this str?

const str = `Count number of letters 
in this string using for loop`

const obj = {}

for(let i of str) {
    if(obj[i]) {
        obj[i] += 1
    } else {
        obj[i] = 1
    }
}
console.log(obj)