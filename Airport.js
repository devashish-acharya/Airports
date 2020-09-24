class Airport {
    constructor({name}) {
        this.name = name
        this.plane = []
    }
    addPlane(plane) {
        this.plane.push(plane)
    }
}

module.exports = Airport