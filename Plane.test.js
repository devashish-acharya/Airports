const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Plane', function () {
    test('has a name', function () {
        const plane = new Plane({name: "British Airways"})
        expect(plane.name).toEqual("British Airways")
    })

    test('has passengers', () => {
        const plane = new Plane({pname: "British Airways"})
        const person1 = new Passenger({name: "Dev"})
        const person2 = new Passenger({name: "Elijah"})
        const person3 = new Passenger({name: "Kate"})
        plane.addPassenger(person1)
        plane.addPassenger(person2)
        plane.addPassenger(person3)
        expect(plane.passenger.length).toBe(3)
})

})