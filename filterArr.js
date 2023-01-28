


const ages = [32, 33, 16, 40]
const result = ages.filter(checkAdult)

function checkAdult(ages) {
    return ages >= 18
}

console.log(result)