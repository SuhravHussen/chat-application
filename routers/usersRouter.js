const express = require('express');
const { getUsers, addUser, removeUser } = require('../controllers/usersController');
const  decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const avatarUpload = require('../middleware/users/avaterUpload');
const { addUserValidators, addUserValidationHandler } = require('../middleware/users/userValidators');
const router = express.Router();

// login page
router.get('/',decorateHtmlResponse("Users") , getUsers);

// add user
router.post('/', avatarUpload , addUserValidators, addUserValidationHandler , addUser);

// remove user
router.delete('/:id' , removeUser)

module.exports = router;
