const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe('Passenger', function(){
    test('has a name', function(){
        const person = new Passenger('Dev')
        expect(person.name).toEqual('Dev')
    })

    test('has bags', () => {
        const person = new Passenger({name:'Elijah'})
        const handluggage = new Bag(10)
        const hullluggage = new Bag(20)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        expect(person.bags.length).toBe(2)
    })
    test('we can read the weight of a bag', () =>{
        const poppy = new Passenger({name:'Kate'})
        const rucksac = new Bag(6)
        poppy.addBag(rucksac)
        expect(poppy.bags[0].weight).toBe(6) 
    })
})