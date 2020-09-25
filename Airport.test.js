const Airport = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Airport', function(){
    /*test('has planes', () => {
        const airport = new Airport({name: "Heathrow"})
        const plane1 = new Plane({name: "British Airways"})
        const plane2 = new Plane({name: "Easy Jet"})
        const plane3 = new Plane({name: "Ryanair"})
        airport.addPlane(plane1)
        airport.addPlane(plane2)
        airport.addPlane(plane3)
        expect(airport.plane.length).toBe(3)
     })*/

    test('LHR to HKG', ()=>{
        //airports
        airport1 = new Airport('LHR')
        airport2 = new Airport('HKG')

        //plabe
        plane = new Plane()

        //conection between airports
        plane.setDestination(airport2.name)
        airport1.addPlane(plane)

        //test before takeoff
        expect(plane.location).toEqual('LHR')
        expect(plane.destination).toEqual('HKG')

        //takeoff
        airport1.takeoff(plane)

        //test after landing
        expect(airport1.planes.length).toBe(0)
        expect(airport2.planes.length).toBe(1)
        expect(plane.location).toEqual('HKG')
    })
    
    test('have extra data we can get', async () => {
        const LHR = new Airport('LHR')
        const info = await LHR.getInfo()
        expect(info.city).toBe('London')
       
    })

    test('have extra data', async () => {
        const CDG = new Airport('CDG')
        const info = await CDG.getInfo()
        expect(info.city).toBe('Paris')
    })

    
    test('airports have a city', (done) => {
        const HKG = new Airport({name: 'HKG'})
        HKG.getInfo((err, info) => {
            expect(err).toBeNull()
            expect(info.city).toBe("Hong Kong")
            done()
        })
    })
    
})