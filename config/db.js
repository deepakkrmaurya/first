import mongoose from "mongoose";

const dbconnection = async()=>{
    try {
         const connection = await mongoose.connect('mongodb+srv://deepakmaurya2211:deepak123@cluster0.5fzfq.mongodb.net/');
         if(connection){
            console.log('db connection successfully...')
         }
    } catch (error) {
          console.log("db connection faild",error)
          process.exit(1);
    }
}

export default dbconnection;