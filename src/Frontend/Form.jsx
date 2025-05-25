import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  return (
    <div className="formdiv">
      <form action="/billuploadpage" method="post">
        <fieldset>
          <legend className="legendclass">
            Please insert your <span className="spanBlue"> Email </span> and{" "}
            <span className="spanBlue">password.</span>{" "}
          </legend>
          <label htmlFor="username" className="userlabel">
            <strong>Email: </strong>
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            name="username"
            required
            autoComplete="off"
          />
          <label htmlFor="password" className="passlabel">
            <strong>Password: </strong>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="bottominput"
            placeholder="Password goes here"
            name="password"
            required
            autoComplete="off"
          />
          <div className="showin">
            <input
              type="checkbox"
              id="show"
              checked={showPassword} 
              onChange={handleCheckboxChange} 
            />
            <label htmlFor="show" className="showPasswordLabel">
              Show Password
            </label>
          </div>
          <input
            type="submit"
            value="Sign in"
            className="sign btn btn-success form-control-lg"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;