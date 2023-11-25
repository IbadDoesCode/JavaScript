// Function Parameter Destructuring

const Profile = {
    name: 'Smith',
    age: 23
}

function intro({name}) {
    console.log("My name is", name)
}

intro(Profile)
