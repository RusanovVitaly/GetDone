import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../login/loginPage";


export const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
)