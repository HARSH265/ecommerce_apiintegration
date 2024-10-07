const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

// Error Middleware
const errorMiddleware = require("./middleware/error");

// Config for environment variables
require("dotenv").config({ path: "backend/config/config.env" });
app.use(
  cors({
    origin: "http://localhost:3000", // Ensure this matches the frontend origin exactly
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const user = require("./Routes/userRoute");

// Use Routes
app.use("/api/v1", user);

// Serve frontend static files in production
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
