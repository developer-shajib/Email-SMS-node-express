const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const BulkBdMessage = require('../utility/BulkSMSBD');
const sendMail = require('../utility/sendMail');
const sendSMS = require('../utility/twilioSendSMS');
const vonAgeSMS = require('../utility/vonAgeSMS');



//show user form-
const showUserForm = (req,res)=>{
    res.render('user/index')
}



const userFormDataMail = async (req,res)=>{

    sendMail(req.body.email,'Email Verification');

    //send sms by twilio
    // await sendSMS(req.body.cell,`Hi ${req.body.name}.You are welcome to sorobindu,Your email is ${req.body.email}`)

    //send sms by vonAge
    // await vonAgeSMS(req.body.cell,`Hi ${req.body.name}.Vonage SMS Done`);

    // bulkSMSBD
    // await BulkBdMessage(req.body.cell,`HI name.BulkBDSMS sented.`)

    res.redirect('/user');
}



module.exports = {
    showUserForm,
    userFormDataMail
}