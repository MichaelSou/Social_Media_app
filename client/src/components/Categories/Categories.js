import React from "react";
import { Grid, Button } from "@material-ui/core";
import categories from './Categ_constants'

import { useDispatch } from 'react-redux';
import { getPostByCategory } from '../../actions/posts';


const Categories = () => {
    const dispatch = useDispatch();
    

    return(
        <Grid container spacing={3} direction="column" alignItems="center">
            {categories.map(category =>  <Button key={category} onClick={() => dispatch(getPostByCategory(category))}> {category} </Button>)}
        </Grid>
    )
}


export default Categories;