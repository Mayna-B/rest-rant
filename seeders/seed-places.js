const db = require('../models')

db.Place.create([{
    name: 'Frenchie Cafe',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Coffee, Bakery',
    pic: '/images/frenchie-cafe.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Cat-Cafe.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
