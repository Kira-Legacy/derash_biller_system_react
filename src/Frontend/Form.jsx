import React, { useState } from "react";
import "./Form.css";

function Form() {

  const [showPassword, setShowPassword] = useState(false);
  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    console.log("Submitting: ", {username, password});

    try{
      const response = await fetch('http://localhost:3001/credentialsubmit',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      if(response.ok){
        const data = await response.json();
        console.log("Login successful:", data);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch(error){
      console.error("Network or server error:", error);
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
          />
          <label htmlFor="password" className="passlabel">
            <strong>Password: </strong>
          </label>
          <input type={showPassword ? "text" : "password"} className="bottominput" placeholder="Password goes here" name="password" required
            autoComplete="off" />
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