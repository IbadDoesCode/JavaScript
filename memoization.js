// it is a caching technique to store expensive funtion calls results and avoid unnecessary recalculations in JS...

const memoizedFibonacci = (function() {
    const cache = {}

    return function fib(n) {
        if (n in cache) return cache[n]
        if (n <= 1) return n

        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
    }
})()
