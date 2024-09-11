// JavaScript Array Intersection

const brands = ['Apple','MI','KIA','Ford','Google','Meta','Honda','Zic','Toyota','HP']

const haveCars = ['KIA','Ford','Honda','Toyota']

const carBrands = haveCars.filter(
    haveCar => brands.includes(haveCar)
)

console.log(carBrands)
