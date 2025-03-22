import { model, Schema } from 'mongoose';
import { project } from './project.interface';

const ProjectSchema = new Schema<project>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  additionalImages: {
    type: [String],
    default: [],
  },
  techs: {
    type: [String],
    default: [],
  },
});

export const projectModel = model<project>('project-collection', ProjectSchema);
