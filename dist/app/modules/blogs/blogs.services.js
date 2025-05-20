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
exports.blogServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongodb_1 = require("mongodb");
const blogs_model_1 = require("./blogs.model");
const getBlogsfromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.find();
    return result;
});
const getsSingleBlogsfromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.find({ _id: new mongodb_1.ObjectId(id) });
    return result;
});
const createblogsIntoDb = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.create(blog);
    console.log(result);
    return result;
});
const updatBlogsInDB = (id, blogs) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.findByIdAndUpdate(id, blogs);
    return result;
});
const deleteBlogsFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.findByIdAndDelete(id);
    return result;
});
exports.blogServices = {
    getBlogsfromDb,
    getsSingleBlogsfromDb,
    createblogsIntoDb,
    deleteBlogsFromDb,
    updatBlogsInDB,
};
