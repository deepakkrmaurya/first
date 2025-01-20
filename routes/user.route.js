import { Router } from "express";
import { getAllUser, userRegister } from "../controller/user.controller.js";
const route = Router();

route.get('/',getAllUser) 
route.post('/register',userRegister) 


export default route