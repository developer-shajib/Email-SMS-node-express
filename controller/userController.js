const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const sendMail = require('../utility/sendMail');
const sendSMS = require('../utility/sendSms');



//show user form-
const showUserForm = (req,res)=>{
    res.render('user/index')
}



const userFormDataMail = (req,res)=>{

    sendMail(req.body.email,'Email Verification');

    // sendSMS(req.body.cell,`Hi ${req.body.name}.You are welcome to sorobindu,Your email is ${req.body.email}`)

    res.redirect('/user');
}



module.exports = {
    showUserForm,
    userFormDataMail
}