// JS Object as a Constructor
let car = {
    name: "Tesla",
    price: 100000,
    tax: 2500,
    get total(){
        return this.price + this.tax
    }
}
console.log(car.total)