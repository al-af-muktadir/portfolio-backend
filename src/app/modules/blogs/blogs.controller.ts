import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import { sendResponse } from '../../../utils/sendResponse';
import { blogServices } from './blogs.services';

const getBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getBlogsfromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs Retrieved Successfully',
    data: result,
  });
});
const getsingleBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getsSingleBlogsfromDb(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs Retrieved Successfully',
    data: result,
  });
});

const createBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.createblogsIntoDb(req.body);
  // console.log(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs Created Successfully',
    data: result,
  });
});
const updateBlogs = catchAsync(async (req, res) => {
  console.log(req);
  const result = await blogServices.updatBlogsInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs Updated Successfully',
    data: result,
  });
});

const deleteBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.deleteBlogsFromDb(req.params.id);
  console.log('de', req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs Deleted Successfully',
    data: result,
  });
});
export const blogController = {
  getBlogs,
  getsingleBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs,
};
