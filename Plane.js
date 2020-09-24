const Airport = require('./Airport')
class Plane{
    constructor(){
        this.destination = ''
        this.Passengers = []
        this.location = ''
    }
    addPassenger(Passenger){
        this.Passengers.push(Passenger)
    }
    setDestination(destination){
        this.destination = destination
    }
    setLocation(location){
        this.location = location
    }
}

module.exports = Plane

module.exports = Plane