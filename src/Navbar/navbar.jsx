import React, { useEffect } from 'react';
import "./navbar.css";
//import "../bootstrap.css";

export default function Navbar(){
  return(
    <nav>
      <div id="logo"><a href="#"></a></div>
      <Items/>
    </nav>
  );
}

function Items(){

  var dropdownContent=document.getElementsByClassName("lang-dropdown-content");
  var signal="off"

  function name() {
    switch (signal){

      case "off":
        for (var i=0; i< dropdownContent.length; i++){
          dropdownContent[i].style.display= "block";
        }
        signal= "on";
        break;

      case "on":
        for (var i=0; i< dropdownContent.length; i++){
          dropdownContent[i].style.display= "none";
        }
        signal= "off";
        break;
    }

  }
  
  return(
    <ul>
      <li className='items'><a href="#">DESTEK OL</a></li>
      <li className='items'><a href="#">İLETİŞİME GEÇ</a></li>
      <li className='items'><a href="#">GALERİ</a></li>
      <li className='items'><a href="#">HAKKIMIZDA</a></li>
      <button onClick={()=>{name()}} id="lang" className="lang-dropdown">
        <li className='items'>
        <span className="span">TUR</span>
        <i className="fa fa-caret-down"></i>
        </li>
      </button>
        <div className="lang-dropdown-content">
          <a href="#">ENG</a>
        </div>

    </ul>
  );
}


