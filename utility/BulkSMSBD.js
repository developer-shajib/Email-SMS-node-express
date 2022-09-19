const axios = require('axios');



const BulkBdMessage = (to,msg)=>{

    axios.get(`https://bulksmsbd.net/api/smsapi?api_key=L7MFixFR51at8MJ0iXvd&type=text&number=${to}&senderid=8809601004414&message=${msg}`)
    .then(res=>{console.log(`SMS successfully Sent`);})
    .catch(error=>{console.log(`Failed SMS`);})

}




module.exports = BulkBdMessage;