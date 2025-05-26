import React, { useEffect } from "react";
import './WelcomeBiller.css'; 

function WelcomeBiller() {
    useEffect(() => {
        const welcomeElement = document.querySelector('.welcome');
            const text = welcomeElement.textContent;
            welcomeElement.style.setProperty('--characters', text.length);
    }, []);

    return (
            <h1 className="welcome">Welcome Biller!</h1>
    )
}

export default WelcomeBiller;