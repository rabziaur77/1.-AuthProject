
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

//import sendToSpecificClient from '../SocketClient/SocketClientSide.js';


const SendSMSRequest=(req, res)=>{
    const request = req.body;
    if(request){
        const rows = request["msg"].trim().split('\n');
        rows.forEach((line, index) => {
            if (index > 0) {
                const [toNumber, message] = line.split(',');
                if (toNumber && message) {
                    let sms = {'to': toNumber, msg: message}
                    //sendToSpecificClient(request["to"], JSON.stringify(sms))
                    console.log(request["from"],request["to"], JSON.stringify(sms))
                }
              }
        });
        // if(emitChatMessage(request["from"], request["to"], request["msg"]))
        //     res.status(200).send({'Status':'Sent'})
        // else
        //     res.status(400).send({'Status':'Bad Request'})
        //res.status(200).send({'Status':request})
        res.send({ status: "Messages processed" });
    }
    else
        res.status(400).send("Bad Request")
}

export default SendSMSRequest