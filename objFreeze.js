// You can update frozen objects
const creator = {
    name: 'Ibad',
    subs: 1000
}
console.log(Object.freeze(creator))
creator.name = 'Kim'
console.log(Object.freeze(creator))
