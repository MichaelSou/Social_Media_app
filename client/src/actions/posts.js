import { CREATE_POST, GET_POST, DELETE_POST } from '../constants/actionTypes';
import * as api from '../api/index.js';



export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPost(id)

        dispatch( { type: GET_POST, payload: data } );
    } catch (error) {
        console.log(error);
    }
};


export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts()

        dispatch( { type: GET_POST, payload: data } );
    } catch (error) {
        console.log(error);
    }
};

export const getPostByCategory = (category) => async (dispatch) => {

    try {
        const { data } = await api.getPostByCateg(category);
        
        dispatch( { type: GET_POST, payload: data } );
    } catch (error) {
        console.log(error);
    }
};


export const createPost = (post) => async (dispatch) => {
    
    try {
        const { data } = await api.createPost(post);

        dispatch( { type: CREATE_POST, payload: data } );
    } catch (error) {
        console.log(error);
    }

};


export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id);
        
        dispatch( { type: DELETE_POST, payload: id });
    } catch (error) {
        console.log(error);
    }

}