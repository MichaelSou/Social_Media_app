import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import Input from './input'
import { signup, signin } from '../../actions/auth'

//import useStyles from './styles';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const classes = useStyles();


  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };


  const handleSubmit = (e) => {
      e.preventDefault();
    
      if (isSignup) {
        dispatch(signup(form, navigate));
      } else {
        dispatch(signin(form, navigate));
      }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container>
      <Paper>
      <form onSubmit={handleSubmit}>
        <Grid>
        { isSignup && (
          <>
          <Input name='firstname' label='firstname' handleChange={handleChange} autoFocus half/>
          <Input name='lastname' label='lastname' handleChange={handleChange} autoFocus half/>
          </>)}
          <Input name='email' label='email' handleChange={handleChange} autoFocus half/>
          <Input name='password' label='password' handleChange={handleChange} autoFocus half/>
          { isSignup && (
          <>
          <Input name='confirm_password' label='confirm_password' handleChange={handleChange} autoFocus half/>
          </>)}
          <Button type='submit'>{ isSignup ? 'Sign Up' : 'Sign In' }</Button>
        </Grid>

        <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
      </form>
      </Paper>
    </Container>
  )
};

export default Auth;