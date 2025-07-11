const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

// Middleware to parse JSON bodies
app.use(express.json());

// Echo endpoint
app.get("/echo", (req, res) => {
  res.json({ message: "ok" });
});

// Root endpoint for basic health check
app.get("/", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Echo endpoint available at: http://localhost:${PORT}/echo`);
});
