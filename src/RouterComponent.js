import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Students from "./Pages/StudentData";
import PageNotFound from "./Pages/PageNotFound";

function RouterComponent() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact-us" element={<ContactUs/>} />

            <Route path="/students" element={<Students/>} />

            <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent