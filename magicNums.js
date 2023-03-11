

// Normal JavaScript
const validatePass = (pass) => {
    if (pass.length >= 8) {
        console.log("Good Password")
    }
}

// The Best Practice
const MIN_PASS_LENGTH = 8
const validatePass2 = (pass) => {
    if (pass.length >= MIN_PASS_LENGTH) {
        console.log("Good Password")
    }
}