// Conditionally Add Properties
// to Objects
const isUser = false
const user = {
    name:"James",
    ...(isUser && {off:'50%'})
}
console.log(user)