import { createRequire } from "module";
const require = createRequire(import.meta.url);
const roadmaps = require("../ServerSide/src/data/roadmap.json");
const courses = require("../ServerSide/src/data/courses.json");

// seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "../ServerSide/src/models/Course.js";
import Roadmap from "../ServerSide/src/models/Roadmap.js";
// import courses from "./data/courses.json";
// import roadmaps from "./data/roadmaps.json";

dotenv.config();
console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI); // Debug

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("🛢 Connected to MongoDB");

    // Optional: Clear old data
    await Course.deleteMany();
    await Roadmap.deleteMany();

    // Insert new data
    await Course.insertMany(courses);
    await Roadmap.insertMany(roadmaps);

    console.log("✅ Data imported successfully!");
    process.exit(); // Exit the script
  })
  .catch((err) => {
    console.error("❌ Failed to seed data:", err);
    process.exit(1);
  });
