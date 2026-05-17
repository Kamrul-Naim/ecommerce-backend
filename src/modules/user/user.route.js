import express from "express";
import auth from "../../middleware/auth.js";
import authorize from "../../middleware/authorize.js";

import userController from "./user.controller.js";

import validateRequest from "../../middleware/validateRequest.js";

import userValidation from "./user.validation.js";

const router = express.Router();


// router.post("/createUser", userController.createUser);


router.get("/", auth, (req, res) => {

   res.json({
      success: true,
      message: "Protected route accessed",
      user: req.user,
   });

});

router.get(
   "/admin",

   auth,

   authorize("admin"),

   (req, res) => {

      res.json({
         success: true,
         message: "Welcome Admin",
      });

   }
);

router.post(
   "/createUser",

   validateRequest(
      userValidation.createUserValidationSchema
   ),

   userController.createUser
);

export default router;