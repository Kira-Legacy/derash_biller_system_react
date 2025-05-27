import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./Form.css";

function Form() {

  const [showPassword, setShowPassword] = useState(false);
  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitting: ", { username, password });

    try {
      const response = await fetch("http://localhost:3001/credentialssubmit", { // <-- IMPORTANT: Point to your Express server
        method: "POST",
        headers: {
          "Content-Type": "application/json", // <-- Specify JSON content
        },
        body: JSON.stringify({ username, password }), // <-- Send data as JSON
      });

      const data = await response.json();
      console.log("Backend response:", data);

      if (response.ok) {
        
        alert(data.message);
        navigate("/credentialssubmit");

      } else {

        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="formdiv">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="legendclass">
            Please insert your <span className="spanBlue"> Email </span> and{" "}
            <span className="spanBlue">password.</span>{" "}
          </legend>
          <label htmlFor="username" className="userlabel">
            <strong>Email: </strong>
          </label>
          <input type="email" placeholder="example@example.com" name="username" required autoComplete="off"
          value={username} onChange={handleUsernameChange} />
          <label htmlFor="password" className="passlabel">
            <strong>Password: </strong>
          </label>
          <input type={showPassword ? "text" : "password"} className="bottominput" placeholder="Password goes here" name="password" required
            autoComplete="off" value={password} onChange={handlePasswordChange} />
          <div className="showin">
            <input type="checkbox" id="show" checked={showPassword} onChange={handleCheckboxChange} />
            <label htmlFor="show" className="showPasswordLabel">
              Show Password
            </label>
          </div>
          <input type="submit" value="Sign in" className="sign btn btn-success form-control-lg" />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;