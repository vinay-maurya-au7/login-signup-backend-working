const { check, validationResult} = require('express-validator');

exports.validateRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('First name is required'),

    check('lastName')
    .notEmpty()
    .withMessage('last Name is required'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Valid email address is required'),

    check('password')
    .isLength({ min : 6 })
    .withMessage('Password must be at leat 6 character long')

];

exports.isRequestValidated = (req, res, next) =>{
    const errors = validationResult(req);
    if(errors.array().lenght > 0){
        return res.status(400).json({error : errors.array()[0].msg })
    }
    next();
}