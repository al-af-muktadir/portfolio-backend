"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const route = express_1.default.Router();
route.get('/projects', project_controller_1.ProjectController.getProjects);
route.post('/projects', project_controller_1.ProjectController.createProjects);
route.get(`/projects/:id`, project_controller_1.ProjectController.getSingleProjects);
route.delete(`/projects/:id`, project_controller_1.ProjectController.deleteProjects);
route.patch(`/projects/:id`, project_controller_1.ProjectController.updateProjects);
// route.get(`/projects/:id`, ProjectController.getingleProjects);
exports.ProjectRoute = route;
