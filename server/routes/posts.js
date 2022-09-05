import express from 'express';


import { getPostByCategory, getPostBySearch, getPosts, getPost, createPost, deletePost } from '../controllers/posts.js';
import auth from  '../middleware/auth.js'


const router = express.Router();


router.get('/', getPosts);
router.get('/post/:id', getPost);
router.get('/search', getPostBySearch);
router.get('/:category', getPostByCategory);

router.post('/', auth, createPost);
router.delete('/post/:id', auth, deletePost);


export default router;