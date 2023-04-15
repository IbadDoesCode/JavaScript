
// Console.trace() Method in JS

function outerFunc () {
    function innerFunc () {
        console.trace()
    }
    innerFunc()
}
outerFunc()