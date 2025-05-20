import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProjectRoute } from './app/modules/projects/project.route';
import { blogRouter } from './app/modules/blogs/blogs.route';
import { MessageRoute } from './app/modules/messages/message.route';
import { userROuter } from './app/modules/user/user.route';
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://new-project-5-two.vercel.app',
      'portfolio-dashboard-ivory.vercel.app',
    ],
    credentials: true,
  }),
);
app.use('/api', ProjectRoute);
app.use('/api', blogRouter);
app.use('/api', MessageRoute);
app.use('/api', userROuter);
app.get('/', (req: Request, res: Response) => {
  res.send('PortFolio is Rocking');
});
export default app;
