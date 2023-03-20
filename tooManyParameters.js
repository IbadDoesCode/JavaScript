// Don't use too many parameters 
// to the JavaScript function

// Bad Habit
function calPrice(
    itemPrice, customTax, salesTax,
    shipCost, discount, taxRate
) {
    // body
}

// Good Habit
function totalPrice (...item) {
    const { itemPrice, customTax,
        salesTax, shipCost, 
        discount, taxRate } = item
}