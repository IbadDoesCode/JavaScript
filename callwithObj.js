// call method with objects

const myInfo = {
    name: "John"
}

function getName() {
    return "Hello " + this.name
}

console.log(getName.call(myInfo))
