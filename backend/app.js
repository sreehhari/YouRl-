import express from 'express';
import { nanoid } from 'nanoid'
import router from './src/routes/yourl.route.js';
import dotenv from 'dotenv';
import cors from 'cors';
import shortUrl from './src/models/yourl.model.js';
dotenv.config("./.env");

import connectDb from './src/config/mongo.config.js';
import { redirectYourl } from './src/controller/yourl.controller.js';
import errorHandler from './src/utils/errorhandler.js';

const app = express();
app.use(cors()); // Enable CORS for all routes
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/create',router);

app.get('/:id',redirectYourl);

// Global error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});