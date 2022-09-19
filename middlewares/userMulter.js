const multer = require('multer');


//storage ulser multer
const userMulterStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        if(file.fieldname == 'photo1'){
            if(file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
                    cb(null,path.join(__dirname,'../public/images/'));
            }
            else{
                console.log(`Invalid image formate.`);
            }
        }
        if(file.fieldname == 'cv'){
            if(file.mimetype == 'application/pdf'){
                    cb(null,path.join(__dirname,'../public/cv/'));
            }
            else{
                console.log(`Invalid cv formate.`);
            }
        }

    },
    
    
    filename : (req,file,cb)=>{
        cb(null, Date.now() +'_'+ file.originalname)
    }
})


const userMulter = multer({storage : userMulterStorage}).fields([
    {
        name : 'photo1',
        maxCount : 5
    },
    {
        name  : 'cv',
        maxCount : 1
    }
]);


module.exports = userMulter;