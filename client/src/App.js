import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () => {


    return (
        <BrowserRouter>
            <CssBaseline/>
            <Navbar/>
            
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Navigate replace to="/home" />}/>
                <Route path="/post" element={<Form/>}/>
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;