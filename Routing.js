import express from 'express'
import jwt from 'jsonwebtoken'
import {Login, ValidateUser} from './Accounts/UserAuthentication.js'
import SendSMSRequest from './Controller/SendSMS.js';
import { secret } from './TokenAuth/Tokenization.js';

const router = express.Router();

// Middleware to check token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  
    if (!token) return res.status(401).json({ message: 'Token not provided' });
    //if (token) return res.status(200).json({ message: token });
  
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
  
      req.user = user;
      next();
    });
  }

//*******Account Controller***********/
router.post("/account", Login)
router.get("/validate",authenticateToken, ValidateUser)


//*******Controllers********************/

router.post('/sms',authenticateToken, SendSMSRequest)

export default router;