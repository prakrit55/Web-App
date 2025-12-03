import express from "express";
import { loginAdmin } from "../controllers/admin.controller.js";
import { getDashboardStats } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/dashboard/stats", protectAdmin, getDashboardStats);

export default router;
