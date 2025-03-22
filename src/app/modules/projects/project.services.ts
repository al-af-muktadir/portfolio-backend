/* eslint-disable @typescript-eslint/no-explicit-any */
import { project } from './project.interface';
import { projectModel } from './project.model';

const getProjectFromDb = async () => {
  const result = await projectModel.find();
  return result;
};

const getSingleProjectFromDb = async (id: string) => {
  const result = await projectModel.findById(id);
  return result;
};
const postProjectIntoDb = async (projects: project) => {
  const result = await projectModel.create(projects);
  return result;
};
const deleteprojectfromDb = async (id: string | number) => {
  const result = await projectModel.findByIdAndDelete(id);
  return result;
};
const updateProjectsintoDb = async (id: number | string, projects: any) => {
  const result = await projectModel.findByIdAndUpdate(id, projects);
  console.log('sadsdppppp', result);
  return result;
};

export const ProjectService = {
  getProjectFromDb,
  getSingleProjectFromDb,
  postProjectIntoDb,
  updateProjectsintoDb,
  deleteprojectfromDb,
};
