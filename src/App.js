import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import { LoginContext } from "./Contexts/LoginContex";
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
