//It is a function that returns an Object
// Creating a Factory Function
function employeeObj(name) {
    return {
        name : name,
        work: function() {
            console.log('New Employee Created with Name: ' + name)
        }
    }
}

//Creating an Employee with factory function
const emp = employeeObj('Elon Musk')
emp.work()
