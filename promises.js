
//Promise is alternative to async/await
// Example of how to use promise to
// deal with 3rd Party API
fetch('https://dummyjson.com/product/7')
.then(res => res.json())
.then(json => console.log(json))
