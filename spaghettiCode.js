
// spaghetti code anti pattern

// Don't Do This
function calculate(items) {
    let total = 0
    for(let i = 0; i < items.length; i++) {
        for(let j=0; j<items[i].length; j++) {
            total += items[i][j].name
        }
    }
    return total
}

// Do This Instead
function myTotal(goods) {
    let all = 0
    for (let good of goods) {
        all = good.name
    }
    return all
}
