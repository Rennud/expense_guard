import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import injectContext from "./store/appContext";

import { Navbar } from "./components/Navbar";



// Main component that handling all routing on FE
const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>   
        </BrowserRouter>
    )
}

export default injectContext(RoutesComponent);