const targetElement = document.
querySelector("#target")
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        console.log('Element is Visible')
    }
  })  
})
obs.observe(targetElement)