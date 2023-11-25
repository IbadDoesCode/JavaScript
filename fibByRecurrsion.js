//Two Ways to get nth Fibonacci in JS

// 2. Recurrsion
function fibonacci(n) {
  if (n <= 1) return n

  else return fibonacci(n - 1) + 
  fibonacci(n - 2)
}

console.log(fibonacci(12));
