

const amount = 156723489
const f = new Intl.NumberFormat('en-us',{
    currency:"USD",
    style:"currency"
})

console.log(f.format(amount))