// Slider using pure JS
let slider= document.querySelector('.slider')
if(slider) {
    let slick = new Slick(slider, {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })
}