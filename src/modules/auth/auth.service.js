import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../user/user.model.js";

const loginUser = async (payload) => {

   // check user exists
   const user = await User.findOne({
      email: payload.email,
   });

   if (!user) {
      throw new Error("User not found");
   }


   // compare password
   const isPasswordMatched = await bcrypt.compare(
      payload.password,
      user.password
   );

   if (!isPasswordMatched) {
      throw new Error("Invalid password");
   }


   // generate token
   const token = jwt.sign(
      {
         userId: user._id,
         role: user.role,
      },
      process.env.JWT_SECRET,
      {
         expiresIn: "7d",
      }
   );


   return {
      token,
      user: {
         _id: user._id,
         name: user.name,
         email: user.email,
         role: user.role,
      },
   };
};

export default {
   loginUser,
};