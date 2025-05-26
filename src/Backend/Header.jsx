import React from "react";
import WelcomeBiller from "./WelcomeBiller";
import Logout from "./Logout";
import './Header.css';

function Header() {
    return (
        <div className="headerDiv">
            <WelcomeBiller />
            <Logout />
        </div>
    )
}

export default Header;