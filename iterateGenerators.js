function* generator() {
    yield 'Hello'
    yield '2'
    yield 'Hola'
}
let generate = generator()
console.log(...generate)