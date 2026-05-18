import paymentService
   from "./payment.service.js";

import Order
   from "../order/order.model.js";

import User
   from "../user/user.model.js";

import catchAsync
   from "../../utils/catchAsync.js";


const initiatePayment = catchAsync(
   async (req, res) => {

      const order =
         await Order.findById(req.params.orderId);

      const user =
         await User.findById(order.user);


      const paymentSession =
         await paymentService.initiatePayment(
            order,
            user
         );


      res.status(200).json({
         success: true,
         paymentUrl:
            paymentSession.GatewayPageURL,
      });
   }
);


export default {
   initiatePayment,
};