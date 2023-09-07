
// Handling Rejections

const promise1 = Promise.resolve('promise 1')
const promise2 = Promise.resolve('promise 2')
const promise3 = Promise.resolve('promise 3')

// if any promise reject, the whole promise 
// chain rejects immediately.
Promise.all([promise1,promise2,promise3])
.then(results => console.log(results))
.catch(error => console.log(error))

// even if any promise rejects, the resulting 
// array will contain info of both.
Promise.allSettled(
    [promise1,promise2,promise3]
).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log(result.value)
        }else if(result.status === 'rejected'){
            console.error(result.reason)
        }
    })
})

