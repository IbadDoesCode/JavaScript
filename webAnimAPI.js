// Web Animations API
// This is how to use this API
let element = document
.getElementById("circle")
let animation = element.animate([
    { opacity: 0 }, { opacity: 1 }],
    {
        duration: 300,
        easing: 'linear'
    })