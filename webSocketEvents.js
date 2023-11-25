// WebSocket Events

const socket = 
new WebSocket('ws://example.com')

socket.addEventListener('error',
(event) => {
    console.error(
        `WebSocket Error: ${event}`
    )
})

socket.addEventListener('close',
(event) => {
    if (event.wasClean) {
        console.log(
`Connection closed cleanly,
code=${event.code},
reason=${event.reason}`
        )
    }
})
