// async / await for FUN!

function delay(ms) {
    return new Promise((resolve) => 
    setInterval(resolve, ms))
}

async function greet() {
    console.log("Loading...")

    await delay(2000)
    // pause program for 2s

    console.log("Executed!")
}

greet()

