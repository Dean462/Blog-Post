const { body } = require("express-validator");

exports.registerInputValidation = [
    body("name").notEmpty().withMessage("Name is Required"),
    body("email").notEmpty().withMessage("Email is Required").isEmail().withMessage( "Please enter a valid Email"),
    body("password").notEmpty().withMessage("Password is Required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
] 