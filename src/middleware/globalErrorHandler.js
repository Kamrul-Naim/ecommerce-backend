const globalErrorHandler = (
   error,
   req,
   res,
   next
) => {

   let statusCode = 500;

   let message = "Something went wrong";

   let errors = [];


   // mongoose validation error
   if (error.name === "ValidationError") {

      statusCode = 400;

      message = "Validation Error";

      errors = Object.values(error.errors).map(
         (value) => ({
            path: value.path,
            message: value.message,
         })
      );
   }


   // mongodb duplicate error
   else if (error.code === 11000) {

      statusCode = 400;

      message = "Duplicate value error";

      errors = [
         {
            path: Object.keys(error.keyValue)[0],
            message: `${Object.keys(error.keyValue)[0]} already exists`,
         },
      ];
   }


   // jwt error
   else if (error.name === "JsonWebTokenError") {

      statusCode = 401;

      message = "Invalid token";
   }


   // default error
   else {

      message = error.message || message;
   }


   res.status(statusCode).json({
      success: false,
      message,
      errors,
   });
};

export default globalErrorHandler;