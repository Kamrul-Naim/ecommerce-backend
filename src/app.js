import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import apiRoutes from "./routes/api.js";

const app = express();


// parsers
app.use(
   express.json({
      limit: "10kb",
   })
);


// cors
app.use(
   cors({
      origin: ["http://localhost:3000"],
      credentials: true,
   })
);

//helmet
app.use(helmet());

// rate-limit
const limiter = rateLimit({

   windowMs: 15 * 60 * 1000,

   max: 100,

   message: {
      success: false,
      message: "Too many requests, please try again later",
   },
});

app.use(limiter);


// routes
app.use("/api/v1", apiRoutes);

app.use((req, res) => {

   res.status(404).json({
      success: false,
      message: "API Not Found",
   });
});

app.use(globalErrorHandler);


app.get("/", (req, res) => {
   res.send("Server is running");
});


export default app;