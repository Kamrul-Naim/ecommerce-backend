import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
   try {

      // get authorization header
      const authHeader = req.headers.authorization;

      if (!authHeader) {
         return res.status(401).json({
            success: false,
            message: "No token provided",
         });
      }


      // extract token
      const token = authHeader.split(" ")[1];

      if (!token) {
         return res.status(401).json({
            success: false,
            message: "Invalid token format",
         });
      }


      // verify token
      const decoded = jwt.verify(
         token,
         process.env.JWT_SECRET
      );


      // attach user info to request
      req.user = decoded;

      next();

   } catch (error) {

      return res.status(401).json({
         success: false,
         message: "Unauthorized access",
      });

   }
};

export default auth;