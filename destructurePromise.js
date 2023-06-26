// Destructure Promises

// for success -> resolve
// for error -> reject

new Promise ((resolve, reject) => {
    try {
        const data = /* perform a task */
        resolve(data)
    } catch(e) {
        reject(new Error(e))
    }
})
