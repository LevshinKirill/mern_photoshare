const Router = require('express')
const router = new Router()
const homeController = require('../controllers/home.controller')

router.get('/', async (req, res) => {
  homeController.returnTestString(req, res)
})

module.exports = router