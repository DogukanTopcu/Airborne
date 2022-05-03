import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact/Contact";
import Home from "./Home";
import Support from "./Components/Support/Support"
import About from "./Components/About/About";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About /> }/>
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support/>}/>
          <Route path="about" element={<About /> }/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;