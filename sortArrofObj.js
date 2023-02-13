const employees = [
    { id: 1, name: 'Jack', isUser: true },
    { id: 5, name: 'Mike', isUser: true },
    { id: 3, name: 'Erin', isUser: false },
    { id: 7, name: 'Saha', isUser: true },
    { id: 2, name: 'Anne', isUser: false }
]
// sort on the basis of IDs
employees.sort((e1,e2) => e1.id - e2.id)
console.log(employees)