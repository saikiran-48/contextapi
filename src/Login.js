import React, { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContex";
export default function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="text" placeholder="Password" />
        <button onClick={() => setShowProfile(true)}>Login</button>
        {/* {showProfile && <h1> {username} </h1>} */}
      </div>
    </>
  );
}
