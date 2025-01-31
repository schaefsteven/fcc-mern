import express from 'express';

import Product from '../models/product.model.js';
import { createProduct, getProducts, editProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", createProduct);

router.put("/:id", editProduct);

router.get("/", getProducts);

router.delete("/:id", deleteProduct);

export default router;
