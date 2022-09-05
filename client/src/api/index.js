import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.1.6:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });



export const getPosts = (posts) => API.get('/posts');
export const getPost = (id) => API.get(`/posts/post/${id}`)
export const createPost = (newPost) => API.post('/posts', newPost);
export const deletePost = (id) => API.delete(`/posts/post/${id}`);
export const getPostByCateg = (category) => API.get(`/posts/${category}`);

export const signin = (formData) => API.post('/user/signin', formData)
export const signup = (formData) => API.post('/user/signup', formData)