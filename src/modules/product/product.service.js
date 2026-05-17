import Product from "./product.model.js";

const createProductIntoDB = async (payload) => {

   const product = await Product.create(payload);

   return product;
};


const getAllProductsFromDB = async (query) => {

   // filtering
   const filter = {};

   if (query.category) {
      filter.category = query.category;
   }


   // searching
   if (query.searchTerm) {

      filter.title = {
         $regex: query.searchTerm,
         $options: "i",
      };
   }


   // pagination
   const page = Number(query.page) || 1;

   const limit = Number(query.limit) || 10;

   const skip = (page - 1) * limit;


   // database query
   const products = await Product.find(filter)
      .skip(skip)
      .limit(limit)
      .sort("-createdAt");


   // total count
   const total = await Product.countDocuments(filter);


   return {
      meta: {
         page,
         limit,
         total,
      },

      data: products,
   };
};

const getSingleProductFromDB = async (id) => {

   const product = await Product.findById(id)
      .populate("createdBy", "name email role");

   return product;
};


const updateProductIntoDB = async (id, payload) => {

   const updatedProduct =
      await Product.findByIdAndUpdate(

         id,

         payload,

         {
            new: true,
            runValidators: true,
         }
      );

   return updatedProduct;
};

const deleteProductFromDB = async (id) => {

   const deletedProduct =
      await Product.findByIdAndDelete(id);

   return deletedProduct;
};


export default {
   createProductIntoDB,
   getAllProductsFromDB,
   getSingleProductFromDB,
   updateProductIntoDB,
   deleteProductFromDB
};