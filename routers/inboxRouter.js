const express = require('express');
const { getInbox } = require('../controllers/inboxController');
const { checkLogin } = require('../middleware/common/checkLogin');
const  decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse') 
const router = express.Router();
router.get('/',decorateHtmlResponse("Inbox") ,checkLogin, getInbox);

module.exports = router;
