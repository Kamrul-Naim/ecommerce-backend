import express from "express";

import auth from "../../middleware/auth.js";

import paymentController
   from "./payment.controller.js";

const router = express.Router();


router.post(
   "/initiate-payment/:orderId",

   auth,

   paymentController.initiatePayment
);


export default router;