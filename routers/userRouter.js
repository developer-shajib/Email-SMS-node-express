const express = require('express');
const { showUserForm, userFormDataMail  } = require('../controller/userController');
const multer = require('multer');
const path = require('path');

//init router
const router = express.Router();




//router
router.get('/', showUserForm);
router.post('/',userMulter, userFormDataMail);

module.exports= router;