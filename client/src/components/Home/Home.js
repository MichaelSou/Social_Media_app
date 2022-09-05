import React, { useEffect } from "react";

import Posts from '../Posts/Posts';
import Categories from '../Categories/Categories'
import { Grid } from "@material-ui/core";

import { getPosts } from '../../actions/posts';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [navigate, dispatch]);

    
    return (
        <div>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="stretch" xs={12} >
            <Grid item xs={2}>
            <Categories />
            </Grid>
            <Grid item xs={8}>
            <Posts />
            </Grid>
            <Grid item xs={2}>

            </Grid>
        </Grid>
        </div>
        
    )
}

export default Home;