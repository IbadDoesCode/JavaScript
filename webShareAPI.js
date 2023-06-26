// Web Share API In JS
const data = {
    title: 'Learn JS ES6',
    url: 'ibaddoescode.com'
}
if (navigator.canShare &&
    navigator.canShare(data))
    {
        navigator.canShare(data)
    } else {
        // Browser doesn't support
    }