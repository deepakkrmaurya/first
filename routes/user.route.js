import { Router } from "express";
import { userRegister } from "../controller/user.controller.js";
const route = Router();

route.post('/register',userRegister) 

export default route