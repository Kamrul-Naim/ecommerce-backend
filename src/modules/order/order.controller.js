import orderService from "./order.service.js";

import catchAsync
   from "../../utils/catchAsync.js";


const createOrder = catchAsync(
   async (req, res) => {

        const payload = {

            ...req.body,

            user: req.user.userId,

            transactionId:
                `TXN-${Date.now()}`,
        };

      const result =
         await orderService.createOrderIntoDB(
            payload
         );

      res.status(201).json({
         success: true,
         message: "Order created successfully",
         data: result,
      });
   }
);

const getMyOrders = catchAsync(
   async (req, res) => {

      const result =
         await orderService.getMyOrdersFromDB(
            req.user.userId
         );

      res.status(200).json({
         success: true,
         message: "Orders retrieved successfully",
         data: result,
      });
   }
);


export default {
   createOrder,
   getMyOrders
};