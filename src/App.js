import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./Components/Nav/Nav";

class App extends React.Component{

  render(){
    return(
      <div className="container">
        <NavBar/>
      </div>
    );
  }
}

export default App;