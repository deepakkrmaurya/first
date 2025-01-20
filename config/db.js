import mongoose from "mongoose";

const dbconnection = async()=>{
    try {
         const connection = await mongoose.connect(process.env.MONGOSE_URI);
         if(connection){
            console.log('db connection successfully...')
         }
    } catch (error) {
          console.log("db connection faild",error)
          process.exit(1);
    }
}

export default dbconnection;