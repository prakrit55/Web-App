import Roadmap from "../models/Roadmap.js";

export const getRoadmaps = async (_, res) => {
  const roadmaps = await Roadmap.find().sort({ createdAt: -1 });
  res.json(roadmaps);
};

export const getRoadmapById = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });
    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const addRoadmap = async (req, res) => {
  try {
    const { emoji, title, description, color, tags, steps } = req.body;

    // ✅ Basic Validation
    if (!emoji || !title || !description || !color || !steps) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Create new roadmap
    const newRoadmap = new Roadmap({
      emoji,
      title,
      description,
      color,
      tags,
      steps,
    });

    await newRoadmap.save();

    res
      .status(201)
      .json({ message: "Roadmap created successfully", newRoadmap });
  } catch (error) {
    console.error("Error creating roadmap:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findByIdAndDelete(req.params.id);
    if (!roadmap) return res.status(404).json({ message: "Roadmap not found" });

    res.status(200).json({ message: "Roadmap deleted successfully" });
  } catch (error) {
    console.error("Error deleting roadmap:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
