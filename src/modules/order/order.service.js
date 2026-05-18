import Order from "./order.model.js";

const createOrderIntoDB = async (payload) => {

   const result =
      await Order.create(payload);

   return result;
};

const getMyOrdersFromDB = async (userId) => {

   const orders = await Order.find({
      user: userId,
   })

      .populate("products.product")
      .sort({ createdAt: -1 });

   return orders;
};

export default {
   createOrderIntoDB,
   getMyOrdersFromDB
};