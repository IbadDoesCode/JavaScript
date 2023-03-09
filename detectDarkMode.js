//Detect Dark Mode in 1 Line
const isDark = 
window.matchMedia &&
window.matchMedia(
'[prefer-color-scheme:dark]')
.match