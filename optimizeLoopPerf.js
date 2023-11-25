// Optimizing Loop Performance

// Don't Do This
const goods = [1,2,3,4,5,6]
for (let i=0; i<goods.length; i++) {
    console.log(goods[i])
}

// Do This Instead
for (let i in goods) {
    console.log(goods[i])
}
