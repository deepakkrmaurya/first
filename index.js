import app from "./app.js";
import dbconnection from "./config/db.js";

app.listen(3000,async()=>{
   await dbconnection()
    console.log('server is runing')
})