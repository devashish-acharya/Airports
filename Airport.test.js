const Plane = require('./Plane')
const Airport = require('./Airport')

describe('Airport', function () {
    test('has a name', function () {
        const plane = new Plane({name: "Heathrow"})
        expect(plane.name).toEqual("Heathrow")
    })

    test('has planes', () => {
        const airport = new Airport({name: "Heathrow"})
        const plane1 = new Plane({name: "British Airways"})
        const plane2 = new Plane({name: "Easy Jet"})
        const plane3 = new Plane({name: "Ryanair"})
        airport.addPlane(plane1)
        airport.addPlane(plane2)
        airport.addPlane(plane3)
        expect(airport.plane.length).toBe(3)
})

})