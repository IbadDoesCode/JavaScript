
// Longhand
const isVowel = (letter) => {
    if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u' 
    ) {
        return true
    }
    return false
}


// Shorthand 
const hasVowel = (letter) => {
    ['a','e','i','o','u'].includes(letter)
}