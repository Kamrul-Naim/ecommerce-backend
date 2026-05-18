import mongoose from "mongoose";

const orderedProductSchema =
   new mongoose.Schema({

      product: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Product",
         required: true,
      },

      quantity: {
         type: Number,
         required: true,
         min: 1,
      },
   });


const orderSchema = new mongoose.Schema(

   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },

      products: [orderedProductSchema],

      totalPrice: {
         type: Number,
         required: true,
      },

      paymentStatus: {
         type: String,
         enum: ["pending", "paid", "failed"],
         default: "pending",
      },

      transactionId: {
         type: String,
         default: "",
      },

      orderStatus: {
         type: String,
         enum: [
            "pending",
            "processing",
            "shipped",
            "delivered",
         ],
         default: "pending",
      },
   },

   {
      timestamps: true,
   }
);


const Order =
   mongoose.model("Order", orderSchema);

export default Order;