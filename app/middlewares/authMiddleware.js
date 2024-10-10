import { decodeToken } from "../utilities/tokenUtility.js"


export const authVerify = (req,res,next)=>{
    let token = req.headers['token']
    if(!token){
        token=req.cookies['token']
    }
    let decoded = decodeToken(token)
    
    if(decoded==null){
        res.status(401).send({status:"failed",message:"Unauthorize"})
    }else{
        req.headers.email=decoded['email']
        req.headers.user_id=decoded['user_id']
        next()
    }
}