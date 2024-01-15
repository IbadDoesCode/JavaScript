// try finally statements

function code() {
    try {
        return 1
    } finally {
        return 2
        // this is prefered!
    }
}

const result = code()
console.log(result)
