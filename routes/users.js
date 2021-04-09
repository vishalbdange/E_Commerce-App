const express = require('express')
const router = express.Router()
// const auth = require('../middleware/auth')
const {signUp} = require('../controllers/users')

router.post('/signUp',signUp)

// router.get('/wishList',auth,getWishList);

module.exports = router