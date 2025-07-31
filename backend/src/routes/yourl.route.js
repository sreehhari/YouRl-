import express from 'express';
import { createUrl } from '../controller/yourl.controller.js'
const router = express.Router();


router.post("/",createUrl)

export default router;