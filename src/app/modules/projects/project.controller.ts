import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import { sendResponse } from '../../../utils/sendResponse';
import { ProjectService } from './project.services';

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getProjectFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'projects Retrieved Succesfully',
    data: result,
  });
});
const getSingleProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getSingleProjectFromDb(req.params.id);
  // console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'projects Retrieved Succesfully',
    data: result,
  });
});
const createProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.postProjectIntoDb(req.body);
  // console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'projects Created Succesfully',
    data: result,
  });
});
const deleteProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.deleteprojectfromDb(req.params.id);
  // console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'projects deleted Succesfully',
    data: result,
  });
});
const updateProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProjectsintoDb(
    req.params.id,
    req.body,
  );
  console.log('sdadasadsasdasd', req.body, req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'projects Updated Succesfully',
    data: result,
  });
});

export const ProjectController = {
  getProjects,
  getSingleProjects,
  deleteProjects,
  createProjects,
  updateProjects,
};
