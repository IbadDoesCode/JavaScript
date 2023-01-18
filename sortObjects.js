let employees = [
    {id:3, name: 'Mike'},
    {id:5, name: 'John'},
    {id:1, name: 'Kane'},
    {id:4, name: 'Mark'},
    {id:2, name: 'Wick'},
]

// sorting the employees on the basis 
//of their id
employees.sort((e1,e2) => e1.id - e2.id)
console.log(employees);