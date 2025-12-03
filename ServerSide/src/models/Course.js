import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    thumbnail: { type: String, trim: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    teacher: { type: String, required: true },
    youtubeLink: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
