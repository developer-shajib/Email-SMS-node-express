const dotenv = require('dotenv').config();
const twilio = require('twilio')(process.env.SMS_SID,process.env.Auth_Token);


const twilio_cell = process.env.Twilio_Cell


// //create sms
const sendSMS = (to,sms)=>{

    const client = new twilio(process.env.SMS_SID,process.env.Auth_Token);

    twilio.messages.create({
        from : twilio_cell,
        to : to,
        body : sms
    })
    .then(res =>{
        console.log('SMS sent Successful');
    })
    .catch(error=>{
        console.log(error.messages);
    })

}

module.exports = sendSMS;