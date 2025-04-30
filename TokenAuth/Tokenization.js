import jwt from 'jsonwebtoken'

export const secret = "accurateappsolution@json#web-token;"
const option = {
    expiresIn: '1h',
    algorithm: 'HS256'
}
export const generateToken = (payload)=>{
    const token = jwt.sign(payload, secret, option)

    return token;
}

export const decodeToken = (token)=>{
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
      } catch (err) {
        console.error('Invalid token:', err.message);
        return "";
      }
      
}
