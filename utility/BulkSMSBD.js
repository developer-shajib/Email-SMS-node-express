const axios = require('axios');
const dotenv = require('dotenv').config()



const BulkBdMessage = async (to,msg)=>{

   await axios.get(`https://bulksmsbd.net/api/smsapi?api_key=${process.env.bulkSMSBD_API_KEY}&type=text&number=${to}&senderid=${process.env.SERNDER_ID}&message=${msg}`)
    .then(res=>{console.log(`SMS successfully Sent`);})
    .catch(error=>{console.log(`Failed SMS`);})

}




module.exports = BulkBdMessage;