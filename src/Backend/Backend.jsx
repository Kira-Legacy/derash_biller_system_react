import React from "react";
import Header from "./Header";
import GetandPost from "./GetandPost";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Backend(){
    return(
        <div>
            <Header />
            <GetandPost />
            <Router>
            <Routes>
                <Route path="/getbill" element={<Backend />} />
            </Routes>
        </Router>
        </div>
    )
}

export default Backend;