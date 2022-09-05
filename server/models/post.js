import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    creator: String,
    img: String,
    likes: { type: [String], default: []},
    category: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMod = mongoose.model('Posts', postSchema);

export default PostMod;