// Bad Habit
fetch('/x').then((x) => {
    fetch('/y', { x })
    .then((y) => {
        fetch('/z', { y })
        .then((z) => {
            console.log(z)
        })
    })
})

// Good Habit
const a = await fetch('/a')
const b = await fetch('/b', {a})
const c = await fetch('/c', {b})
console.log(c)