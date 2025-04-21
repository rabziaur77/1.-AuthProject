import express from 'express'
import {Login} from './Accounts/UserAuthentication.js'

const router = express.Router();

router.get("/account", Login)

export default router;