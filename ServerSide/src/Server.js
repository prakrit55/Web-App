import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import courseRoutes from "./routes/course.routes.js";
import roadmapsRoutes from "./routes/roadmap.routes.js";
import adminRoutes from "./routes/admin.routes.js";

dotenv.config();
const app = express();

// ───────────────────────────────
// Middlewares
// ───────────────────────────────
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON data

// ───────────────────────────────
// Routes
// ───────────────────────────────
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/roadmaps", roadmapsRoutes);

// Root ping
app.get("/", (req, res) => {
  res.send("ZekiCoderLMS Backend Server is running...");
});

// ───────────────────────────────
// Server & DB Boot
// ───────────────────────────────
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`⚡ Server listening on http://localhost:${PORT}`);
});

