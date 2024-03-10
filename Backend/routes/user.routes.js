const express = require('express');
const { registerUser, getAllUser, loginUser, getProfile } = require('../controllers/user.controller');
const { body } = require('express-validator');
const { registerInputValidation } = require('../middlewares/inputvalidation.middlewares');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/register', registerInputValidation, registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile)
router.get('/all', getAllUser);

module.exports = router;    