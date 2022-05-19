const express = require('express');
const { getUsers, addUser, removeUser } = require('../controllers/usersController');
const { checkLogin } = require('../middleware/common/checkLogin');
const  decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const avatarUpload = require('../middleware/users/avaterUpload');
const { addUserValidators, addUserValidationHandler } = require('../middleware/users/userValidators');
const router = express.Router();

// user page
router.get('/',decorateHtmlResponse("Users") , checkLogin , getUsers);

// add user
router.post('/',checkLogin , avatarUpload , addUserValidators, addUserValidationHandler , addUser);

// remove user
router.delete('/:id' , removeUser)

module.exports = router;
