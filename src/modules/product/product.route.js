import express from "express";

import auth from "../../middleware/auth.js";
import authorize from "../../middleware/authorize.js";

import productController from "./product.controller.js";

const router = express.Router();


// public
router.get(
   "/",
   productController.getAllProducts
);

router.get(
   "/:id",
   productController.getSingleProduct
);


// admin only
router.post(
   "/createProduct",

   auth,

   authorize("admin"),

   productController.createProduct
);


router.patch(
   "/updateProduct/:id",

   auth,

   authorize("admin"),

   productController.updateProduct
);


router.delete(
   "/deleteProduct/:id",

   auth,

   authorize("admin"),

   productController.deleteProduct
);

export default router;