// Create your own Promise.any()

Promise.myAny = function (promiseList) {
    return new Promise((resolve,reject) => 
    {
        let rejected_const = 0
        for(const p of promiseList) {
            Promise.resolve(p).then((res) => 
            {
                resolve(p)
            })
            .catch((err) => {
                rejected_const++
                if (rejected_const == 
                    promiseList.length) {
                    reject('all rejected.')
                }
            })
        }
    })
}
