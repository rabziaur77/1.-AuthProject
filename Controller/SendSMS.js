
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */


const SendSMSRequest=(req, res)=>{
    const request = req.body;
    if(request)
        res.status(200).send(request)
    else
        res.status(400).send("Bad Request")
}

export default SendSMSRequest