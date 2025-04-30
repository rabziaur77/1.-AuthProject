import SupaBase from '../DataSource/DataContext.js';
import {generateToken} from '../TokenAuth/Tokenization.js';
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */



export const Login = async (req,res)=>{
    res.setHeader('Cache-Control', 'no-store');
    let request = req.body
    
    //let status={"Status":"Done"}
    const { data, error } = await SupaBase
     .from('UserAccount_tbl')
     .select('id,UserName')
     .eq('UserName',request["userName"])
     .eq('Password',request["password"]);

    if(data.length>0){
        const token = generateToken(data[0])
        res.send({"Status":"Success","Result":token})
    }
    else
        res.status(400).send({"Status":"Failed","Result":"Invalid username & password."})
}