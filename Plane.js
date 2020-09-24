class Plane {
    constructor({name}) {
        this.name = name
        this.passenger = []
    }
    addPassenger(passenger) {
        this.passenger.push(passenger)
    }
}

module.exports = Plane