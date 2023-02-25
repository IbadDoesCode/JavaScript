// LongHand
// const specs = []
if (hasCar) {
    specs.push('Car')
}
if (hasWifi) {
    specs.push('WiFi')
}
if (hasPark) {
    specs.push('Park')
}

// ShortHand
const specs = []

hasCar && specs.push('Car')
hasWifi && specs.push('WiFi')
hasPark && specs.push('Park')