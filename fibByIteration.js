//Two Ways to get nth Fibonacci in JS

// 1. Iteration
function fibonacci(n) {
  let fibo = [0, 1]

  if (n <= 2) return 1

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2]
  }

  return fibo[n]
}

console.log(fibonacci(12))
