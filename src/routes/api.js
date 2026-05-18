import express from "express";

import userRoutes from "../modules/user/user.route.js";
import authRoutes from "../modules/auth/auth.route.js";
import productRoutes from "../modules/product/product.route.js";
import orderRoutes from "../modules/order/order.route.js";
import paymentRoutes
   from "../modules/payment/payment.route.js";

const router = express.Router();

router.use("/users", userRoutes);

router.use("/auth", authRoutes);

router.use("/products", productRoutes);

router.use("/orders", orderRoutes);

router.use("/payments", paymentRoutes);

export default router;