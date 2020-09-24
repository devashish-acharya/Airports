const aeroplane = require('./Plane')
class Airport{
    static airports = []

    constructor(name){
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    addPlane(plane){
        this.planes.push(plane)
        plane.setLocation(this.name)
    }
    land(plane){
        this.planes.push(plane)
    }
    takeoff(plane){
        const index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
        const destinationAirport = Airport.airports.find(airport => airport.name === plane.destination)
        destinationAirport.addPlane(plane)
    }
}
module.exports = Airport