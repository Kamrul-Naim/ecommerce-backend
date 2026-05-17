import userService from "./user.service.js";
import catchAsync from "../../utils/catchAsync.js";


const createUser = catchAsync(
   async (req, res) => {

      const user =
         await userService.createUserIntoDB(req.body);

      res.status(201).json({
         success: true,
         message: "User created successfully",
         data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
         },
      });
   }
);


export default {
   createUser,
};