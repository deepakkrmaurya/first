import express from 'express'
const app = express();

const base = '/api/v1'

import userRegister from './routes/user.route.js'
app.use(`${base}/user`,userRegister);
app.use('/',(req,res)=>{
    res.send('server is ready')
})

export default app