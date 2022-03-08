import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react';
import "./navbar.css";
//import "../bootstrap.css";

export default function Navbar() {
  return (
    <nav>
      <div id="logo"><a href="#"></a></div>
      <Items />
    </nav>
  );
}

function Items() {
  
  var dropdownContent="";
  var iconDown="";
  var iconUp = ""
  var signal = ""


  useEffect(() => {
    dropdownContent = document.getElementsByClassName("lang-dropdown-content");
    iconDown = document.getElementById("icon-down");
    iconUp = document.getElementById("icon-up");
    signal = "off"

  });

  function name() {
    switch (signal) {

      case "off":
        for (var i = 0; i < dropdownContent.length; i++) {
          dropdownContent[i].style.display = "block";
        }

        iconDown.style.display = "none";
        iconUp.style.display = "inline-block"

        signal = "on";
        break;

      case "on":
        for (var i = 0; i < dropdownContent.length; i++) {
          dropdownContent[i].style.display = "none";
        }

        iconDown.style.display = "inline-block";
        iconUp.style.display = "none"

        signal = "off";
        break;
    }

  }

  return (
    <ul>
      <li className='items'><a href="#">DESTEK OL</a></li>
      <li className='items'><a href="#">İLETİŞİME GEÇ</a></li>
      <li className='items'><a href="#">GALERİ</a></li>
      <li className='items'><a href="#">HAKKIMIZDA</a></li>
      <button onClick={() => { name() }} id="lang" className="lang-dropdown">
        <li className='items'>
          <span className="span">TUR</span>
          <div id="icon-down" ><i className="fa-solid fa-angle-down"></i></div>
          <div id="icon-up" ><i className="fa-solid fa-angle-up"></i></div>
        </li>
      </button>
      <div className="lang-dropdown-content" onClick={() => { name() }}>
        <a href="#">ENG</a>
      </div>
    </ul>
  );
}


