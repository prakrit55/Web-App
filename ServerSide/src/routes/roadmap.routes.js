import { Router } from "express";
import {
  getRoadmaps,
  getRoadmapById,
  addRoadmap,
  deleteRoadmap,
} from "../controllers/roadmap.controller.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getRoadmaps);
router.get("/:id", getRoadmapById);
router.post("/", protectAdmin, addRoadmap);
router.delete("/:id", protectAdmin, deleteRoadmap);

export default router;
