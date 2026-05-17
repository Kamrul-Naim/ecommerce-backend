import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },

      description: {
         type: String,
         required: true,
         trim: true,
      },

      price: {
         type: Number,
         required: true,
         min: 0,
      },

      category: {
         type: String,
         required: true,
         trim: true,
      },

      brand: {
         type: String,
         trim: true,
      },

      stock: {
         type: Number,
         required: true,
         min: 0,
         default: 0,
      },

      image: {
         type: String,
      },

      createdBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

const Product = mongoose.model("Product", productSchema);

export default Product;