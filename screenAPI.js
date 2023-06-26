// Screen Wake Lock API

// The Screen Wake Lock API ensures
// that computer display doesn't turn
// off after some time of inactivity.

// Lock the screen

let wakelock = await
navigator.wakelock.request('screen')

// Release the wake lock

wakelock.release()
