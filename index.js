import express from 'express'
import bodyParser from 'body-parser'
import router from './Routing.js';

const app = express()
const PORT = 3000;

// middleware
app.use(bodyParser.json());

// routing
app.use('/api', router);

/*
app.listen(PORT, ()=>{
    console.log(`Server is started on ${PORT}`);
})
*/
export default app;
