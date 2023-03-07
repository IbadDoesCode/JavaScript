
// Lazy Loading Images using JS
document.addEventListener("DOMContentLoaded",
function () {
    let lazyImages = [].slice.call(
        document.
        querySelectorAll('img.lazy')
    )
    if ("IntersectionObserver" 
    in window) {
        let lazyImageObserver = 
        new IntersectionObserver(function 
            (entries,observer) {
            entries.forEach(function 
                (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = 
                    entry.target
                    lazyImage.src = 
                    lazyImage.dataset.src
                    lazyImage.
                    classList.remove("lazy")
                    lazyImageObserver
                    .unobserve(lazyImage)
                }
            })
        })
    }
})