// setters & getters
class Student{
    constructor (name) {
        this._name = name
    }
    get name(){
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}
const student = new Student('James')
console.log(student.name)
student.name = 'Alex'
console.log(student.name)