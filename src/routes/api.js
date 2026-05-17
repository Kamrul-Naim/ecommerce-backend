import express from "express";

import userRoutes from "../modules/user/user.route.js";
import authRoutes from "../modules/auth/auth.route.js";
import productRoutes from "../modules/product/product.route.js";

const router = express.Router();

router.use("/users", userRoutes);

router.use("/auth", authRoutes);

router.use("/products", productRoutes);

export default router;