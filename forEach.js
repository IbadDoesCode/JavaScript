const items = [
    { name:'James', age: 23},
    { name:'Mike', age: 25},
    { name:'Tim', age: 19}
]
items.forEach(item =>
    console.log(
`He is ${item.name} and he's ${item.age} years old.`
    )
)