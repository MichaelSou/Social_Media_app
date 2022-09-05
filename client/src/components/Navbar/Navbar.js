import React, { useEffect, useState } from "react";
import { AppBar, Typography, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes'

import useStyles from './styles';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        
        setUser(null);

        navigate('/auth');
    
    };
    
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token); //decode gia na check expiration
      
            if (decodedToken.exp * 1000 < new Date().getTime()) { //expiration to token
                logout(); 
            }
        };

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    
    
    return (
        <AppBar className={classes.Navbar}>

            <div>    
                <Typography component={Link} to="/" variant="h3">Hello!</Typography>
                {user?.result ? (
                    <div>
                        <Button className={classes.Post_but} component={Link} to="/post" variant="contained" >Post!</Button>

                    
                        <Button className={classes.Logout} onClick={logout} variant="contained" >Logout</Button>
                    </div>
                ) : (
                    <Button className={classes.Post_but} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </div>    
        </AppBar>
    )
}

export default Navbar;