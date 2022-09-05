import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Post from './Post/Post';

import useStyles from './styles';


const Posts = () => {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
          <Grid container spacing={3} direction="column" alignItems="center" >
              {posts[0]?.map((post) => (
                <Grid className={ classes.Posts } key={post._id} item xs={12} sm={7} md={8}>
                  <Post post={post}/>
                </Grid>
              ))}
          </Grid>
        )
    )
}

export default Posts;