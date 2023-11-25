// "this" in JavaScript Method

const Person = {
    name: "John Smith",
    age: 22,
    greet: function () {
        console.log(
            "Hello", this.name
        )
    }
}

Person.greet()