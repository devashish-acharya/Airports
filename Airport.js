const aeroplane = require('./Plane')

const fs = require('fs')
const path = require('path')

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
    // getInfo(onInfo) {
    //     const airportName = this.name
    //     const locationOfFile = path.join(__dirname, 'airportsData.json')

    //     fs.readFile(locationOfFile, function (err, buffer) {
    //         const arrayOfAirports = JSON.parse(String(buffer))
    //         const result = arrayOfAirports.find(airport => airport.iata === airportName)
    //         onInfo(err, result)
    //     })

    /*
    getInfo(callback) {
        fs.readFile('./airportsData.json', (err, data) => {
            callback(err, JSON.parse(String(data)))
        })
    }*/

    
    getInfo() {
        const airportName = this.name
        return new Promise(function (resolve, reject) {
            fs.readFile(path.join(__dirname, 'airportsData.json'), (err, buffer) => {
                if (err) return reject(err)
                
                const arrayOfAirports = JSON.parse(String(buffer))
                const result = arrayOfAirports.find(airport => airport.iata === airportName)
                
                resolve(result)               
            })
        })
    }
    }
    

module.exports = Airport