let vidBtn = document.getElementById("btn")
let closeBtn = document.getElementById("btnX")

vidBtn.onclick = () => {
    vidBtn.requestFullscreen()
}

closeBtn.onclick = () => {
    closeBtn.exitFullScreen()
}