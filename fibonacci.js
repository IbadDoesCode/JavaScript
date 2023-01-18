function fibonacci(num) {
    if (num === 0) return 1
    return num * fibonacci(num - 1)
}

console.log(fibonacci(0))