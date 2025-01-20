import express from 'express'
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
const base = '/api/v1'
app.use(express.json());
const corsConfig = {
    origin:"*",
    Credential:true,
    methods:['GET','POST']
}
// app.options("",cors(corsConfig))
app.use(cors(corsConfig));
import userRegister from './routes/user.route.js'
app.use(`${base}/user`,userRegister);

app.get('/',(req,res)=>{
    res.send('server is runing')
})
export default app