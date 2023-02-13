const Car = {
    name: 'Tesla',
    model: 'X Pro',
    year: 2003,
    price: 85000,
    isAvailable: true,
}

const {price,model, ...newCar} = Car
console.log(newCar)