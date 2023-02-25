// LongHand
function isUser(user){
    if(user){
        return 'Valid'
    }
    else {
        return null
    }
}

// ShortHand
function myUser(user) {
    if(!user) return null

    return 'Valid'
}