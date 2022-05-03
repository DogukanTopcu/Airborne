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
<<<<<<< HEAD
import Support from "./Components/Support/Support"
=======
import About from "./Components/About/About";
>>>>>>> 9b5bab711844eed2452c4b0e3b6ebf80de513265

const App = () => {

<<<<<<< HEAD
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support/>}/>
        </Route>
      </Routes>
    </div>
  );
=======
  render(){
    return(
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About /> }/>
            <Route path="contact" element={<Contact />}/>
          </Route>
        </Routes>
      </div>
    );
  }
>>>>>>> 9b5bab711844eed2452c4b0e3b6ebf80de513265
}

export default App;