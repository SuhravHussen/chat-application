const express = require('express');
const { getLogin, login, logout } = require('../controllers/loginController');
const { redirectLoggedIn } = require('../middleware/common/checkLogin');
const  decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const { doLoginValidators, doLoginValidationHandler } = require('../middleware/login/loginValidators');
const router = express.Router();
router.get('/', decorateHtmlResponse("Login") , redirectLoggedIn , getLogin);


// process login
router.post('/' , decorateHtmlResponse('Login') , doLoginValidators , doLoginValidationHandler , login)

// logout
router.delete('/', logout)

module.exports = router;
