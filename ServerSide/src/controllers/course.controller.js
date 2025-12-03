import Course from "../models/Course.js";

/**
 * @desc  Get all courses
 * @route GET /api/courses
 */
export const getCourses = async (_, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
};

/**
 * @desc  Add new course
 * @route POST /api/courses
 */
export const addCourse = async (req, res) => {
  try {
    const { thumbnail, title, category, teacher, youtubeLink, duration } =
      req.body;

    // 🛡 Validation
    if (
      !thumbnail ||
      !title ||
      !category ||
      !teacher ||
      !youtubeLink ||
      !duration
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 📦 Create course
    const newCourse = new Course({
      thumbnail,
      title,
      category,
      teacher,
      youtubeLink,
      duration,
    });

    await newCourse.save();

    res.status(201).json({ message: "Course created successfully", newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    await course.deleteOne();
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete course" });
  }
};
