import express from 'express';
import mongoose from 'mongoose';

import PostMod from '../models/post.js';


export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostMod.find({ _id: id });

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}

export const getPostByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const posts = await PostMod.find({ category: category });

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
    }

}

export const getPostBySearch = async (req, res) => {
    const search = req.body;
    try {
        const posts = await PostMod.find({ title: search})

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
    }

}

export const getPosts = async (req, res) => {

    try {
        const posts = await PostMod.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}


export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMod({ ...post, createdAt: new Date().toISOString() });

    try {
        await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        await PostMod.findByIdAndDelete(id);

        res.json({ message: 'Posts deleted successfully.'})

    } catch (error) {
        res.status(500).json({message: 'Server error.'});
    }




}