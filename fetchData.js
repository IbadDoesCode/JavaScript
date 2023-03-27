// Fetch Data using fetch() 
// API & Async/Await in JS
const fetchData = async (URL) => {
    const response = await fetch(URL)

    const data = 
    await response.json()
    console.log(data)
}
fetchData('your_URL_here')