import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Box, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';

import { createPost } from '../../actions/posts';
import categories from "../Categories/Categ_constants";
import useStyles from './styles';

const Form = ({ currentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', description: '', category: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));


    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setPostData({ creator: '', title: '', description: '', category: '', tags: '', selectedFile: '' });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost({ ...postData, creator: user.result._id }));
        clear();
    };

    if (!user?.result?._id){
        return (
            <Paper className={classes.paper}>
              <Typography variant="h6" align="center">
                Please Sign In to create your own memories and like other's memories.
              </Typography>
            </Paper>
        );
    }

    return (
        <div>
        <Box pt={15}>
            <Paper className={classes.Paper} elevation={3} >
                <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                    <Typography>Create a post.</Typography>
                    <TextField name="Title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="Description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                    <TextField
                        select
                        variant="outlined"
                        fullWidth
                        value={postData.category}
                        label="Category"
                        onChange={(e) => { setPostData({ ...postData, category: e.target.value }); }}
                    >
                        {(categories || []).map(category =>{ return  <MenuItem key={category} value={category}>{category}</MenuItem> })}
                    </TextField>
                    <TextField name="Tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, img: base64 })}/>
                    <Button variant="contained" size="large" type="submit">Submit</Button>
                    <Button variant="contained" size="small" onClick={clear}>Clear</Button>
                </form>
            </Paper>
            </Box>
            </div>
    )
}

export default Form;