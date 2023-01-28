const obj = {
    x:2,
    y:5,
    z:7
}
// Don't Do this...
const x = obj.x
const y = obj.y
const z = obj.z

// Instead Do this...
const { a, b, c } = obj
