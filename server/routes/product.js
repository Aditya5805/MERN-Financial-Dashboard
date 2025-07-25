import express from "express";
import Product from "../models/KPI.js";
import { products } from "../data/data.js";


const router = express.Router();

router.get("/products", async(req, res) => {
    try{
        const kpis = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;