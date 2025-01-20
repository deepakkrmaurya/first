import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
const base = '/api/v1'
app.use(express.json());
import userRegister from './routes/user.route.js'
app.use(`${base}/user`,userRegister);
export default app