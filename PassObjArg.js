// Pass Arguments As An Object

// Normal Way
const user = (username,age,admin) => 
{
    // create user
}
user('Kim',21,true)


// COOL Way
const createUser = 
({ username,age,admin }) => {
    // create user
}
createUser({
    username: "Sam",
    age: 22,
    admin: false,
})