import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
    {
      name:{
        type:String,

      },
      mobile:{
        type :Number,
        required:true,
        trim:true,
      },
      otp:{
        type:Number
      },
      address: {
        village: { type: String, trim: true },
        city: { type: String, trim: true},
        state: { type: String, trim: true},
        pincode:{type: String, trim: true}
      },
      role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer',
      },
    },
    {
        timestamps:true
    });

    
    const User = mongoose.model('User',userSchema);
    export default User;