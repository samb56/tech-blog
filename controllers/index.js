const router = require('express').Router();
const homeroutes = require('./home-routes')

router.use('/', homeroutes)
router.use('/api', require('./user-routes'))


//error message if wrong route was used
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router