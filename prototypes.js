// share properties & methods 
// between objects
const Sport = function(name) {
    this.name = name
}

Sport.prototype.play = function() {
    console.log(
        "Let's play " + this.name
    )
}

const soccer = new Sport("Soccer")

soccer.play()