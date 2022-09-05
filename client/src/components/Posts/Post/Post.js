import React from "react";
import { Card,  CardContent, CardHeader, Typography, Button, CardMedia } from '@material-ui/core';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from "../../../actions/posts";

import makeStyles from './styles';

const Post = ({ post }) => {

    const classes = makeStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));
    

    return (
        <Card className={ classes.Card } >
            <CardHeader title={post.title} subheader={moment(post.createdAt).fromNow()}/>
            <CardMedia className={ classes.Media } component="img" image={post.img || require('../../../images/noimage.png')}/>
            <CardContent>
                <Typography>{post.description}</Typography>
            </CardContent>
            { user?.result?._id === post.creator  && (
            <Button style={{ color: 'red' }} size="small" onClick={() => dispatch(deletePost(post._id))}>Delete</Button>)}
        </Card>
    )
}

export default Post;