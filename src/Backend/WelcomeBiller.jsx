import React from "react";

function WelcomBiller() {
    return (
        <div class="headerDiv">
            <h1 class="welcome">Welcome Biller!</h1>
            <script>
            document.addEventListener('DOMContentLoaded', (event) => {
                const welcomeElement = document.querySelector('.welcome');
                const text = welcomeElement.textContent;
                welcomeElement.style.setProperty('--characters', text.length);
            });
            </script>
            <button class="logoutButton" onclick="showConfirmation()">Logout</button>
            <div id="confirmationBox" class="confirmation-box" style="display: none;">
                <p>Are you sure you want to logout?</p>
                <button onclick="logout()" class="confirmyes">Yes</button>
                <button onclick="hideConfirmation()">No</button>
            </div>

            <script>
                function showConfirmation() {
            var confirmationBox = document.getElementById('confirmationBox');
                confirmationBox.style.display = 'block';
                history.pushState(null, null, location.href);
                window.addEventListener('popstate', function () {
                    history.pushState(null, null, location.href);
            });
        }

                function hideConfirmation() {
            var confirmationBox = document.getElementById('confirmationBox');
                confirmationBox.style.display = 'none';
        }

                function logout() {
                    location.href = "/logout";
        }
            </script>
            {/* <!-- <script>
            const logoutButton = document.querySelector(".logoutButton");
            logoutButton.addEventListener("click", function () {
                window.location.href = "/logout";
            });
        </script> --> */}
        </div>
    )
}