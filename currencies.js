// International Currencies Format

const million = 1000000

const dollar = new Intl.NumberFormat("id", {
    style: 'currency',
    currency: "USD",
    maximumFractionDigits: 0,
}).format(million)

console.log(dollar)
