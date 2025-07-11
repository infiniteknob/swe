import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3500;

// Middleware to parse JSON bodies
app.use(express.json());

// Echo endpoint
app.get("/echo", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Echo endpoint available at: http://localhost:${PORT}/echo`);
});
