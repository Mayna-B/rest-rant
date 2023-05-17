const db = require('../models')

db.Place.create([{
    name: 'Frenchie Cafe',
    city: 'Carolina Beach',
    state: 'NC',
    cuisines: 'Coffee, Bakery, Organic Frenchie Treats',
    pic: '/images/frenchie-cafe.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Wilmington',
    state: 'NC',
    cuisines: 'Coffee, Bakery & Kitty Treats',
    pic: '/images/Cat-Cafe.jpg',
    founded: 2020
}, {
    name: 'Coqui Selva Restaurante',
    city: 'Miami',
    state: 'FL',
    cuisines: 'Puerto Rican Cuisine',
    pic: '/images/Coqui Selva Restaurante.jpg',
    founded: 2015
}, {
    name: 'Fluff N Brew',
    city: 'Carolina Beach',
    state: 'NC',
    cuisines: 'Beer, Spirits, Finger Food & Gourmet Dog Treats',
    pic: '/images/Fluff n Brew.jpg',
    founded: 2022
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
