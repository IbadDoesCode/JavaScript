const emp = [
    { name:'Mark', age:21, dept:'IT' },
    { name:'John', age:34, dept:'Marketing' },
    { name:'Kim', age:27, dept:'Sales' },
    { name:'Tim', age:23, dept:'IT' }
]

let empIT = emp.filter(e => e.dept == 'IT')

for(let em of empIT) {
    console.log(em.name)
}