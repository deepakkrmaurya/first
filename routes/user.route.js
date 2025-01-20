import { Router } from "express";
const route = Router();

route.get('/register',(req,res)=>{
   res.send('user register')
}) 

export default route