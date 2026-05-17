const authorize = (...roles) => {

   return (req, res, next) => {

      // user comes from auth middleware
      const userRole = req.user.role;

      // check role permission
      if (!roles.includes(userRole)) {

         return res.status(403).json({
            success: false,
            message: "Forbidden access",
         });

      }

      next();
   };
};

export default authorize;