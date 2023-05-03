const router = require('express').Router()

// GET /places
router.get('/new', (req, res) => {
    res.render('places/new')
  })

module.exports = router
