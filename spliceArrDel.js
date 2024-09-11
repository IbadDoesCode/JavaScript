// Don’t use delete to remove an item from array

let items = [7,'John',true,5,false]
console.log(items.length)

// don't do this
delete items[3]
console.log(items.length)

// do this instead
items.splice(3,1)
console.log(items.length)

