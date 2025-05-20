"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blogs_controller_1 = require("./blogs.controller");
const route = express_1.default.Router();
route.get('/blogs', blogs_controller_1.blogController.getBlogs);
route.get('/blogs/:id', blogs_controller_1.blogController.getsingleBlogs);
route.delete('/blogs/:id', blogs_controller_1.blogController.deleteBlogs);
route.post('/blogs', blogs_controller_1.blogController.createBlogs);
route.patch('/blogs/:id', blogs_controller_1.blogController.updateBlogs);
exports.blogRouter = route;
