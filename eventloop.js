console.log('Start') // First

setTimeout(() => {
    console.log('Timeout Callback') // Fourth
}, 0)

Promise.resolve().then(() => {
    console.log('Promise Resolved') // Third
})

console.log('End') // Second
