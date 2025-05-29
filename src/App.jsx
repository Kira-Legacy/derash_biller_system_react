import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontend from "./Frontend/Frontend";
import Backend from "./Backend/Backend";


function App() {
    return <div>
        <Router>
            <Routes>
                <Route path="/" element={<Frontend />} />
                <Route path="/credentialssubmit" element={<Backend />} />
            </Routes>
        </Router>

    </div>;
};

export default App;