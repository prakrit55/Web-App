import { Router } from "express";
import {
  getCourses,
  addCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getCourses);
router.post("/", protectAdmin, addCourse);
router.delete("/:id", protectAdmin, deleteCourse);

export default router;
