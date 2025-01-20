import express from 'express'
const app = express();

const base = '/api/v1'
app.use(express.json());
import userRegister from './routes/user.route.js'
app.use(`${base}/user`,userRegister);
export default app