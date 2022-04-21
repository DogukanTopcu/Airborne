import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NavBar from "./Components/Nav/Nav";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact/Contact";
import Home from "./Home";

class App extends React.Component{

  render(){
    return(
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="contact" element={<Contact />}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;