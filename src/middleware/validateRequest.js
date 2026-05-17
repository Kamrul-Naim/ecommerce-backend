const validateRequest = (schema) => {

   return async (req, res, next) => {

      try {

         await schema.parseAsync({
            body: req.body,
            params: req.params,
            query: req.query,
         });

         next();

      } catch (error) {

         // zod validation errors
         if (error.issues) {

            const formattedErrors =
               error.issues.map((err) => ({

                  path: err.path[1],

                  message: err.message,
               }));


            return res.status(400).json({
               success: false,
               message: "Validation Error",
               errors: formattedErrors,
            });
         }


         // fallback error
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   };
};

export default validateRequest;