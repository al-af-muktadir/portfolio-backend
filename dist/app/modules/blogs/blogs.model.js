"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
    },
});
exports.BlogModel = (0, mongoose_1.model)('Blog-collection', BlogSchema);
