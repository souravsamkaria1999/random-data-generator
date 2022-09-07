import React from "react";
import "./App.css";
import { Switch,Route } from "react-router-dom";
import TodoList from "./ContainerComponents/Todo/TodoList";
import Theme from "./ContainerComponents/Theme/Theme";
import Footer from "./ContainerComponents/Layout/Footer/Footer";
import HomePage from "./ContainerComponents/HomePage/HomePage";
import GitUserDetails from "./ContainerComponents/GitUserDetails/GitUserDetails";
import Header from './ContainerComponents/Layout/Header/Header';
import About from './ContainerComponents/About/About';
const App = () => {
  return (
    <>
    <Header/>
      <Switch>
        <Route path="/Home" component={HomePage} />
        <Route path="/UserInfoGit" component={GitUserDetails} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/Theme" component={Theme} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;