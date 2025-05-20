"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const project_model_1 = require("./project.model");
const getProjectFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.find();
    return result;
});
const getSingleProjectFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.findById(id);
    return result;
});
const postProjectIntoDb = (projects) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.create(projects);
    return result;
});
const deleteprojectfromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.findByIdAndDelete(id);
    return result;
});
const updateProjectsintoDb = (id, projects) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.findByIdAndUpdate(id, projects);
    console.log('sadsdppppp', result);
    return result;
});
exports.ProjectService = {
    getProjectFromDb,
    getSingleProjectFromDb,
    postProjectIntoDb,
    updateProjectsintoDb,
    deleteprojectfromDb,
};
