import mongoose from "mongoose";

// Nested schema for each step inside a roadmap
const stepSchema = new mongoose.Schema({
  stepName: { type: String, required: true },
  description: { type: String, required: true },
});

const roadmapSchema = new mongoose.Schema(
  {
    emoji: String,
    title: String,
    description: String,
    color: String,
    tags: [String],
    steps: [
      {
        stepName: String,
        description: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);
