/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from 'mongodb';
import { BlogModel } from './blogs.model';
import { TBlog } from './blogs.interface';

const getBlogsfromDb = async () => {
  const result = await BlogModel.find();
  return result;
};
const getsSingleBlogsfromDb = async (id: any) => {
  const result = await BlogModel.find({ _id: new ObjectId(id) });
  return result;
};

const createblogsIntoDb = async (blog: TBlog) => {
  const result = await BlogModel.create(blog);
  console.log(result);
  return result;
};

const updatBlogsInDB = async (id: string, blogs: TBlog) => {
  const result = await BlogModel.findByIdAndUpdate(id, blogs);
  return result;
};
const deleteBlogsFromDb = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};
export const blogServices = {
  getBlogsfromDb,
  getsSingleBlogsfromDb,
  createblogsIntoDb,
  deleteBlogsFromDb,
  updatBlogsInDB,
};
