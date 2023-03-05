const students = [
    { roll:01,name:'Kim',course:'CS'},
    { roll:02,name:'Tim',course:'AI'},
    { roll:03,name:'Jim',course:'ML'},
    { roll:04,name:'Sam',course:'AI'}
]
const result = students.reduce((a,b) => {
    const {course} = b
    if (!a[course]) {
        a[course] = []
    }
    a[course].push(b)
    return a
}, {})

console.table(result)

// THIS IS CALLED GROUP BY IN JS