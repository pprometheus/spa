import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUserRole }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submit = () => {
    console.log(username);
    console.log(password);
    if (username === "admin" && password === "admin") {
      setUserRole("admin");
      navigate("/admin");
    } else if (username && password) {
      setUserRole("user");
      navigate("/cards");
    }
  };
  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <div className="login-form">
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="uid"
          placeholder="Enter your Username"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="pwd"
          placeholder="Enter your Password"
        />
        <button onClick={submit}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
