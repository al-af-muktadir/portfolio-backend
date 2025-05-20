"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
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
exports.projectModel = (0, mongoose_1.model)('project-collection', ProjectSchema);
