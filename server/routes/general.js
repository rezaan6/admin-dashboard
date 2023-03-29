import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/api/user/:id", getUser);
router.get("/api/dashboard", getDashboardStats);

export default router;
