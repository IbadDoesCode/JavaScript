const payment = {
    'Tim': true,
    'Hob': false,
    'Kim': true,
}
console.log(
    Object.keys(payment)
    .map( name => ({
        name
    }))
)
