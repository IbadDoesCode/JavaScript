// The result of next() is always 
// an object with two properties:
// value & done

function* generator() {
  yield 1
  yield 2
  return 3
}
let generate = generator()
let obj1 = generate.next()
let obj2 = generate.next()
let obj3 = generate.next()
console.log(obj1)
console.log(obj2)
console.log(obj3)