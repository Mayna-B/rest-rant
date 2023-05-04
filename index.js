//Modules
require('dotenv').config()
const express = require('express')

const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })
  
app.get('*', (req, res) => {
    res.render('error404')
  }) 

//Listen for Connections
const PORT = process.env.PORT || 3000

app.listen(3000, console.log('Listening on Port 3000'))