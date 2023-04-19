
// Private Property in JS & How to access it
class Private {
    #privateProperty = "This is Private"

    getPrivateProperty () {
        return this.#privateProperty
    }
}
const myObj = new Private()

console.log(myObj.getPrivateProperty())