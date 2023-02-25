// Meta Programming in JS

const student = {}
Object.defineProperty(student,'name',{
    get: function() {
        return this._name
    },
    set: function(value) {
        this._name = value
    }
})
student.name = 'Mike'
console.log(student.name)