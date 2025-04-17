import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
const app = express();
// const port  = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});