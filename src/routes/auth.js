const express = require('express');
const router = express.Router();
const {signup, signin, requireSignin} = require('../controller/auth');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../validators/auth')
//using expressvalidation as middleware

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

router.post('/profile', requireSignin, (req, res) =>{
    res.status(400).send({message: "hiii! you are logged in ---"})
})

module.exports = router;