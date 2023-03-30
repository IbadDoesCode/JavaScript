// Use Async/Await for simplifying
// Asynchronous Code

async function getData() {
    const response = await fetch(
        "API_Code"
    )
    const data = await 
    response.json()
    console.log(data)
}
getData()
