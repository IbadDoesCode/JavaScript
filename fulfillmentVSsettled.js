// Fulfillment vs settled Status
const promise1 = Promise.resolve('promise 1')
const promise2 = Promise.resolve('promise 2')
const promise3 = Promise.resolve('promise 3')

// Promise.all() waits for all promises to 
// fulfill or reject and either returns an 
// array if fulfillment or reject with the 
// reason of the first rejected promise.
Promise.all([promise1,promise2,promise3])
.then(results => console.log(results))
.catch(error => console.log(error))

// Promise.allSettled() waits for all promises
// to fulfill or reject and always returns an 
// array of objects.
Promise.allSettled(
    [promise1,promise2,promise3]
).then(results => console.log(results))

