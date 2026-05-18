import SSLCommerzPayment
   from "sslcommerz-lts";

import config
   from "../../config/index.js";


const initiatePayment = async (
   order,
   customer
) => {

   const data = {

      total_amount: order.totalPrice,

      currency: "BDT",

      tran_id: order.transactionId,

      success_url:
         "http://localhost:5000/api/v1/payments/success",

      fail_url:
         "http://localhost:5000/api/v1/payments/fail",

      cancel_url:
         "http://localhost:5000/api/v1/payments/cancel",

      ipn_url:
         "http://localhost:5000/api/v1/payments/ipn",

      shipping_method: "Courier",

      product_name: "Ecommerce Order",

      product_category: "General",

      product_profile: "general",

      cus_name: customer.name,

      cus_email: customer.email,

      cus_add1: "Dhaka",

      cus_city: "Dhaka",

      cus_country: "Bangladesh",

      cus_phone: "01700000000",

      ship_name: customer.name,

      ship_add1: "Dhaka",

      ship_city: "Dhaka",

      ship_country: "Bangladesh",
   };


   const sslcz = new SSLCommerzPayment(

      process.env.STORE_ID,

      process.env.STORE_PASSWORD,

      false
   );


   const apiResponse =
      await sslcz.init(data);

   return apiResponse;
};


export default {
   initiatePayment,
};