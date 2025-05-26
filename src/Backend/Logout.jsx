import React, { useState, useEffect } from "react";
import "./Logout.css";

function Logout() {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleShowConfirmation = () => {
        setShowConfirmation(true);
    }

    const handlehideconfirmation = () => {
        setShowConfirmation(false);
    }

    const handleLogout = () => {
        window.location.href = "/";
    }

    useEffect(() => {
        if (showConfirmation) {
            window.history.pushState(null, '', window.location.href);
            const handlePopState = () => {
                setShowConfirmation(false);
                window.history.pushState(null, '', window.location.href);
            };
            window.addEventListener('popstate', handlePopState);
            return () => {
                window.removeEventListener('popstate', handlePopState);
            }
        }
    }, [showConfirmation]);

    return (
        <div>
            <button className="logoutButton" onClick={handleShowConfirmation}>Logout</button>

            {showConfirmation && (
                <div id="confirmationBox" className="confirmation-box">
                    <p>Are you sure you want to logout?</p>
                    <button onClick={handleLogout} className="confirmyes">Yes</button>
                    <button onClick={handlehideconfirmation}>No</button>
                </div>
            )}

        </div>
    )
}

export default Logout;