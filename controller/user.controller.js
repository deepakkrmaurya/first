import User from "../models/user.model.js"
import crypto from 'crypto';
import jwt from 'jsonwebtoken'
const generateJWTToken = async(user)=>{
   try {
               
           
               // Use `this` to access the current user instance
               const jwtToken = await jwt.sign(
                 {
                   mobile: user.mobile, // Access the current user's mobile
                   role: user.role,     // Access the current user's role
                 },
                 'jdhslkdjhslufhierufhy489y8iudjbfre87yiedjch87rfyujhcbnb4487rfgubvhjn', // Secret key
                 { expiresIn: '1d' } // Token expiration
               );
           
               
               return jwtToken;
             } catch (error) {
               console.error('Error generating JWT Token:', error.message);
               throw error;
             }
}
const userRegister = async (req, res) => {
    try {
        const { mobile } = req.body
        if (!mobile) {
            return res.status(400).json({
                success: false,
                message: "mobile number is required."
            })
        }

        function generateOTP(length = 6) {
            // Generate a random buffer
            const buffer = crypto.randomBytes(length);

            // Convert the buffer to a string of numbers
            const otp = Array.from(buffer)
                .map(byte => byte % 10) // Get the last digit of each byte (0-9)
                .join('')
                .slice(0, length); // Ensure the OTP has the desired length

            return otp;
        }
        const otp = generateOTP(6);
       const user = await User.findOne({mobile})
       
       if(!user){
        var newUser = await User.create({
            mobile: mobile,
            otp:otp
        });
        await newUser.save();
        const token  = await generateJWTToken(newUser);
        
        return res.status(201).json({
            success:true,
            message:"user register successfully",
            user:newUser,
            token : token,
        })
       }
       
        const token  = await generateJWTToken(user);

        return res.status(201).json({
            success:true,
            message:"user register successfully",
            user:user,
            token : token,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            
        })
    }
}

export {
    userRegister
}