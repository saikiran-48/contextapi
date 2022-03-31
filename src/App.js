import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContex";
import "./App.css";
function App() {
  const [username, setUsername] = React.useState("");
  const [showProfile, setShowProfile] = React.useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
