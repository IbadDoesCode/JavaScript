
const socket =
new WebSocket('ws://example.com')

// Sending Data
// (string, ArrayBuffer, Blob)

socket.send("Hello, server!")

// Closing the Connection

socket.close()
