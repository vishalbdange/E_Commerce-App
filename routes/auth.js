const express = require('express')
const router = express.Router()
const {signupValidator,signinValidator,validatorResult} = require('../middleware/validator')
const {signupController,signinController} = require('../controllers/auth')

// router.post('/signUp',signUp)

router.post("/signup",signupValidator,validatorResult,signupController)

router.post("/signin",signinValidator,validatorResult,signinController)

// router.get('/wishList',auth,getWishList);


module.exports = router