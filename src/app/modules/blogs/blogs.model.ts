import { model, Schema } from 'mongoose';
import { TBlog } from './blogs.interface';

const BlogSchema = new Schema<TBlog>({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const BlogModel = model<TBlog>('Blog-collection', BlogSchema);
