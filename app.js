import express from 'express'
const app = express();

app.use('/',(req,res)=>{
    res.send('server is ready')
})
app.use('/ping',(req,res)=>{
    res.send('pong')
})



export default app