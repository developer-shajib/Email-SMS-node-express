const nodemailer = require('nodemailer');


const sendMail = (userMail,subject)=>{
    const transport = nodemailer.createTransport({
        host : process.env.Email_Host,
        port : process.env.Email_Port,
        auth : {
            user : process.env.Email_User,
            pass : process.env.Email_Pass
        }
    });
    transport.sendMail({
        from : process.env.Email_Host,
        to : userMail,
        subject : subject,
        html : `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                img{
                    max-width: 100%;
                }
                body{
                    background-color: #e9e9e9;
                    font-family: Arial, Helvetica, sans-serif;
                }
                .template-wrapper{
                    background-color: #fff;
                    width: 500px;
                    margin: 100px auto 0px;
                    border-radius: 10px;
                    box-shadow: 3px 5px 22px -9px black;
                    border: 2px solid #ddd;
                }
                .template-wrapper a{
                    display: block;
                    padding: 5px 0px;
                    border-bottom: 2px solid #ddd;
                }
                .template-wrapper a img{
                    width: 200px;
                    display: block;
                    margin: auto;
                }
                .header img {
                    padding-top: 6px;
                }
                .body{
                    padding: 30px;
                }
                .body h1{
                    padding-bottom: 10px;
                }
                .body a{
                    background-color: green;
                    display: block;
                    text-decoration: none;
                    text-align: center;
                    color: white;
                    width: 200px;
                    padding: 15px 0px;
                    border-radius: 5px;
                    margin-top: 15px;
        
                }
                .main-wrapper{
                    background-color: #e9e9e9;
                    height: 100vh;
                    width: 100%;
                    padding : 50px 0px
                }
            </style>
        </head>
        <body>
            <div class="main-wrapper">
                <div class="template-wrapper">
                    <div class="header">
                        <a href="https://sorobindu.com/">
                            <img src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png" alt="">
                        </a>
                        
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/22/914693-hacker.jpg" alt="">
                    </div>
                    <div class="body">
                        <h1>Welcome Shajib to SoroBindu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique aperiam autem odio architecto nostrum quos? Perspiciatis architecto suscipit eius pariatur earum repellat nulla sunt et voluptate, animi rerum ab?</p>
                        <br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum labore nam ea voluptas fuga vel eos repellendus sequi, numquam molestiae ipsam, exercitationem praesentium minus vero modi explicabo odio? Ab assumenda commodi asperiores tempore earum qui mollitia illo voluptate laboriosam.</p>
                        <a href="#">Verify Your ID</a>
                    </div>
                    
                </div>
            </div>
        </body>
        </html>`
    });
}

module.exports = sendMail;