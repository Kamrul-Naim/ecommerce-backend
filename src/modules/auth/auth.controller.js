import authService from "./auth.service.js";
import catchAsync from "../../utils/catchAsync.js";


const loginUser = catchAsync(
   async (req, res) => {

      const result =
         await authService.loginUser(req.body);

      res.status(200).json({
         success: true,
         message: "Login successful",
         data: result,
      });
   }
);


export default {
   loginUser,
};