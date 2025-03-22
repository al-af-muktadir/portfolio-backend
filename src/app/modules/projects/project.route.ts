import express from 'express';
import { ProjectController } from './project.controller';

const route = express.Router();

route.get('/projects', ProjectController.getProjects);
route.post('/projects', ProjectController.createProjects);
route.get(`/projects/:id`, ProjectController.getSingleProjects);
route.delete(`/projects/:id`, ProjectController.deleteProjects);
route.patch(`/projects/:id`, ProjectController.updateProjects);
// route.get(`/projects/:id`, ProjectController.getingleProjects);
export const ProjectRoute = route;
