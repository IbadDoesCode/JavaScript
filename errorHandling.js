// Importance of Error Handling

// This May Throw Error
JSON.parse(userInput)

// Do This Instead
try {
    JSON.parse(userInput)
}
catch(error) {
    console.log(error.message)
}
