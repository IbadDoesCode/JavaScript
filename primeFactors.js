// Find all Prime Factors of number

function primeFactors(n) {
    let factors = [], divisor = 2

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor)
            n = n / divisor
        }
        else {
            divisor++
        }
    }
    return factors
}

console.log(primeFactors(33))
