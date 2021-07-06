const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config/keys")

exports.authenticateJWT = (req,res,next) =>{
    console.log(req.cookies)
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({
            errorMessage : "No token , Authorization Denied",
        })
    }

    try{
        const decoded = jwt.verify(token,jwtSecret);
        req.user = decoded.user;
        next();

    }catch(err){
        console.log("JWT Error",err);
        res.status(401).json({
            errorMessage : "Invalid Token",
            
        })
    }
    
}