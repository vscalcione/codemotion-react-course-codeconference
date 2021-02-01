const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
    events: [
        {
            id: 1,
            image: config.origin + '/yoga.png',
            time: "12:30am",
            type: "basic",
            title: "Sunrise Yoga",
            location: "Baraka",
            person: ""
        },
        {
            id: 2,
            image: config.origin + '/register.png',
            time: "8:00am",
            type: "basic",
            title: "Registration",
            location: "Medinas Foyer",
            person: ""
        },
        {
            id: 3,
            image: config.origin + '/breakfast.png',
            time: "7:00am",
            type: "basic",
            title: "Breakfast",
            location: " ",
            person: ""
        },
        {
            id: 4,
            image: config.origin + '/anastasya.png',
            time: "9:00am",
            type: "talk",
            title: "React Developer Tooling",
            location: " ",
            person: "Anastasya Vaughn"
        },
        {
            id: 5,
            image: config.origin + '/cosimo.jpg',
            time: "9:30am",
            type: "talk",
            title: "Data Featching With Suspense in Relay",
            location: " ",
            person: "Cosimo Palma"
        },
        {
            id: 6,
            image: config.origin + '/marc.png',
            time: "10:00am",
            type: "talk",
            title: "Automatic Visualizations of the Frontend",
            location: " ",
            person: "Marc Yick"
        },
        {
            id: 7,
            image: config.origin + '/lunch.png',
            time: "12:00am",
            type: "basic",
            title: "Lunch",
            location: " ",
            person: ""
        },
        {
            id: 8,
            image: config.origin + '/talk.png',
            time: "1:30pm",
            type: "basic",
            title: 'Lightning Talks',
            location: ' ',
            person: ''
        }
    ]

}

const get = (token) => {
    let data = db[token]
    if (data == null)
        data = db[token] = clone(defaultData)
    return data
}

module.exports = { get }
