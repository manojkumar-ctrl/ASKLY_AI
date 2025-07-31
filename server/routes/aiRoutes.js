import express from 'express';
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
  removeImageObject,
  resumeReview
} from '../controllers/aiController.js';
import { upload } from '../configs/multer.js';

const aiRouter = express.Router();

// Remove `auth` from each route
aiRouter.post('/generate-article', generateArticle);
aiRouter.post('/generate-blog-title', generateBlogTitle);
aiRouter.post('/generate-image', generateImage);
aiRouter.post('/remove-image-background', upload.single('image'), removeImageBackground);
aiRouter.post('/remove-image-object', upload.single('image'), removeImageObject);
aiRouter.post('/resume-review', upload.single('resume'), resumeReview);

export default aiRouter;
