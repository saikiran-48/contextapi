import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContex";
import "./Login.css";
export default function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <div className="wrapper">
        <h1>Context API</h1>

        <input
          type="text"
          placeholder="Username"
          className="input-field"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="text" className="input-field" placeholder="Password" />
        <button className="btn" onClick={() => setShowProfile(true)}>
          Login
        </button>
      </div>
    </>
  );
}
