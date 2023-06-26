// JavaScript Compact Number

const formatter = Intl.NumberFormat('en',
{
    notation: 'compact',
    maximumFractionDigits: 3
})

const number = 121970990

console.log(formatter.format(number))