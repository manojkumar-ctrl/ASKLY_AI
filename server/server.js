import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import { auth } from './middlewares/auth.js';
import userRouter from './routes/userRoutes.js';

const app = express();

await connectCloudinary()

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('server is live'));

// Protect only the /api/ai routes with requireAuth
app.use('/api/ai', requireAuth(), auth,aiRouter);
app.use('/api/user',userRouter)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server running on port: ' + PORT);
});
