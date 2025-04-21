import SupaBase from '../DataSource/DataContext.js';
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */



export const Login= async (req,res)=>{
    //let status={"Status":"Done"}
    const { data, error } = await SupaBase
    .from('UserAccount_tbl')
    .select('*');

    res.send(data)
}