// Don't do Switch Case
function values(value) {
    switch(value) {
        case 'A':
            return 'Value is A'
        case 'B':
            return 'Value is B'
        case 'C':
            return 'Value is C'
        default:
            return 'Unknown value'
    }
}

// Use Map instead
const valueMap = new Map([
    ['A', 'Value is A'],
    ['B', 'Value is B'],
    ['C', 'Value is C'],
])

function processValue(value) {
    return valueMap.get(value) ||
     'Unknown Value'
}

