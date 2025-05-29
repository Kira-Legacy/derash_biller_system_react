import React from "react";
import Header from "./Header";
import GetandPost from "./GetandPost";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetBill from "./GetBill";
import PostBill from "./PostBill";

function Backend() {
    return (
        <div>
            <Header />
            <GetandPost />
            <Router>
                <Routes>
                    <Route path="/getbill" element={<GetBill />} />
                    <Route path="/postbill" element={<PostBill />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Backend;