const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.admin_index)
router.get('/add-new-pages', adminController.get_add_new_pages)
router.post('/add-new-pages', adminController.post_add_new_page)
router.delete('/delete/:id',  adminController.delete_page)

module.exports = router
