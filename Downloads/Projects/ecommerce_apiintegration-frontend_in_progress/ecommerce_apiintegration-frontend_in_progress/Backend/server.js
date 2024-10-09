const app = require("./app");
const connectDB = require("./config/db");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.error("Shutting down the server due to uncaught exception.");
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" }); // Adjust path if necessary
}

// Connect to Database
connectDB();

// Start Server
const PORT = process.env.PORT || 8000; // Default port if not specified
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
  console.error("Shutting down the server due to Unhandled Promise Rejection.");

  server.close(() => {
    process.exit(1);
  });
});
