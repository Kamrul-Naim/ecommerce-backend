import productService from "./product.service.js";
import catchAsync from "../../utils/catchAsync.js";


const createProduct = catchAsync(
   async (req, res) => {

      const payload = {
         ...req.body,
         createdBy: req.user.userId,
      };

      const result =
         await productService.createProductIntoDB(payload);

      res.status(201).json({
         success: true,
         message: "Product created successfully",
         data: result,
      });
   }
);


const getAllProducts = catchAsync(
   async (req, res) => {

      const result =
         await productService.getAllProductsFromDB(req.query);

      res.status(200).json({
         success: true,
         message: "Products retrieved successfully",
         meta: result.meta,
         data: result.data,
      });
   }
);


const getSingleProduct = catchAsync(
   async (req, res) => {

      const result =
         await productService.getSingleProductFromDB(
            req.params.id
         );

      res.status(200).json({
         success: true,
         message: "Product retrieved successfully",
         data: result,
      });
   }
);


const updateProduct = catchAsync(
   async (req, res) => {

      const result =
         await productService.updateProductIntoDB(
            req.params.id,
            req.body
         );

      res.status(200).json({
         success: true,
         message: "Product updated successfully",
         data: result,
      });
   }
);


const deleteProduct = catchAsync(
   async (req, res) => {

      await productService.deleteProductFromDB(
         req.params.id
      );

      res.status(200).json({
         success: true,
         message: "Product deleted successfully",
      });
   }
);


export default {
   createProduct,
   getAllProducts,
   getSingleProduct,
   updateProduct,
   deleteProduct,
};