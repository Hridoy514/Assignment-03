const jwt = require('jsonwebtoken');


module.exports=(req,res,next)=>{
    let Token = req.headers['token-key']

    jwt.verify(Token,"SecretKey123", function (err,decode){
        if(err){
            res.status(401).json({status:'Unauthorized'});
        }else{

            let username=decode['data']['UserName']
            req.headers.username=username
            next();
        }
    })
}