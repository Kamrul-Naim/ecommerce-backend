import express from "express";

import auth from "../../middleware/auth.js";

import orderController
   from "./order.controller.js";

const router = express.Router();


router.post(
   "/",
   auth,
   orderController.createOrder
);

router.get(
   "/my-orders",
   auth,
   orderController.getMyOrders
);


export default router;