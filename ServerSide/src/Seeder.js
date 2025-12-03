import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// 🔥 Resolve directory for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Force load .env from root (ServerSide/.env)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ✅ Now log to verify it's loaded
console.log("✅ MONGO_URI:", process.env.MONGO_URI);

// Your other imports below...
import Admin from "./models/Admin.js";
import connectDB from "./config/db.js";

await connectDB();

const seedAdmin = async () => {
  try {
    const admin = new Admin({
      username: "zeki",
      password: "admin123",
    });

    await admin.save();
    console.log("✅ Admin created successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();
