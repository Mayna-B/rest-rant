const db = require('../models')

db.Place.create([{
    name: 'Frenchie Cafe',
    city: 'Carolina Beach',
    state: 'NC',
    cuisines: 'Coffee, Bakery, Frenchie Treats',
    pic: '/images/frenchie-cafe.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Wilmington',
    state: 'NC',
    cuisines: 'Coffee, Bakery, Cat Treats',
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
