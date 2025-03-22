import express from 'express';
import { blogController } from './blogs.controller';
const route = express.Router();
route.get('/blogs', blogController.getBlogs);
route.get('/blogs/:id', blogController.getsingleBlogs);
route.delete('/blogs/:id', blogController.deleteBlogs);
route.post('/blogs', blogController.createBlogs);
route.patch('/blogs/:id', blogController.updateBlogs);
export const blogRouter = route;
