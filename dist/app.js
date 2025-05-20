"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const project_route_1 = require("./app/modules/projects/project.route");
const blogs_route_1 = require("./app/modules/blogs/blogs.route");
const message_route_1 = require("./app/modules/messages/message.route");
const user_route_1 = require("./app/modules/user/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://new-project-5-two.vercel.app',
        'https://portfolio-dashboard-ivory.vercel.app',
    ],
    credentials: true,
}));
app.use('/api', project_route_1.ProjectRoute);
app.use('/api', blogs_route_1.blogRouter);
app.use('/api', message_route_1.MessageRoute);
app.use('/api', user_route_1.userROuter);
app.get('/', (req, res) => {
    res.send('PortFolio is Rocking');
});
exports.default = app;
