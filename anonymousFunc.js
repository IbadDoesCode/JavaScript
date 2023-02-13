
// Anonymous Function in JS
let car = {
    name: "Tesla",
    price: 89000,
    tax: 1200,
    total: function(){
        return this.price + this.tax
    }
}
console.log(car.total())