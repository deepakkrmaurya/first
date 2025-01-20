import { Router } from "express";
import { getAllUser, userRegister } from "../controller/user.controller.js";
const route = Router();

route.post('/register',userRegister) 
route.get('/',getAllUser) 


export default route