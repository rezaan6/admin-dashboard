import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/api/products", getProducts);
router.get("/api/customers", getCustomers);
router.get("/api/transactions", getTransactions);
router.get("/api/geography", getGeography);

export default router;
