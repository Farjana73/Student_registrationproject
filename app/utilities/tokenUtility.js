import jwt from "jsonwebtoken"

export const encodeToken = (email,user_id)=>{
    const KEY = 'abc123';
    const EXPIRE = {expiresIn:'24h'};
    const PAYLOAD = {email,user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const decodeToken =(token)=>{
    try {
        const KEY = 'abc123';
        return jwt.verify(token,KEY)
    } catch (error) {
        return null
    }
}