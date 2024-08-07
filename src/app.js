import express from 'express';
import connectDB  from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Allow only your frontend domain
    credentials: true  // Allows cookies to be sent with requests
}));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

export default app;
