  
const { TestScheduler } = require('jest')
const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Plane', function(){
    test('where is it going?', function(){
        const plane = new Plane()
        plane.setDestination('LHR')
        expect(plane.destination).toEqual('LHR')
    })
    test('does it have passengers?', function(){
        let plane = new Plane('London')
        plane.addPassenger('Guv')
        plane.addPassenger('Giles')
    })
    test('only passengers with a bag?', function(){
        plane = new Plane('London')
        let person = new Passenger('Guv')
        plane.addPassenger(person)
        person.addBag(20)
        expect(person.bags.length).not.toBe(0)
    })
})