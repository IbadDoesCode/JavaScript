// create custom behavior for basic object operations using PROXY in JS...

const handler = {
    get: (target, prop) => {
        console.log('Accessing property: ', prop)
        return target[prop]
    }
}

const targetObj = {name: 'John', age: 23}
const proxyObj = new Proxy(targetObj, handler)

console.log(proxyObj.name)
