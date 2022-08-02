import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ResourceLoader from "./helper/api";
import UserInfoGit from "./ContainerComponents/UserInfoGit";
import User from "./context/user";
import AuthData from "./context/AuthState";
import TodoList from "./store/TodoList"; 
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const api_url = process.env.REACT_APP_API_ENDPOINT;
  return (
    <>
     <AuthData>
        <User />
      <div className="App">
        <header className="App-header">
          <h2>GitHub User Data</h2>
        </header>
        <ResourceLoader
          resourceUrl={api_url + "/users/anurag-311"}
          resourceName="user"
        >
          <UserInfoGit />
        </ResourceLoader>
         {/* Redux  */}
         <TodoList />
      </div>
      <div className="App">
        <header className="App-header">
          <button onClick={toggleTheme}>Current theme: {theme}</button>
        </header>
      </div>
      </AuthData>
    </>
  );
}

export default App;
