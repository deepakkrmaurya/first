import express from 'express'
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
const base = '/api/v1'
app.use(express.json());
app.use(cors());
import userRegister from './routes/user.route.js'
app.use(`${base}/user`,userRegister);
export default app