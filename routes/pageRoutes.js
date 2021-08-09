const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pageController')

router.get('/', pageController.get_index)
router.get('/k/:url', pageController.get_category_detail)
router.get('/all', pageController.all_pages_links)
router.get('/hakkimizda', pageController.get_about)
router.get('/iletisim', pageController.get_contact)
router.get('/about-us', pageController.redirect_about)

router.use(pageController.view_404)

module.exports = router
