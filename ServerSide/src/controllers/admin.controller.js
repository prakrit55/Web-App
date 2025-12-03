import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import Course from "../models/Course.js";
import Roadmap from "../models/Roadmap.js";

const generateToken = (id) => {
    return jwt.sign({ id, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            username: admin.username,
            token: generateToken(admin._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
}

export const getDashboardStats = async (req, res) => {
  try {
    const courseCount = await Course.countDocuments();
    const roadmapCount = await Roadmap.countDocuments();

    res.status(200).json({
      courses: courseCount,
      roadmaps: roadmapCount,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
};

