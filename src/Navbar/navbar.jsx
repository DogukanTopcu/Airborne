import React from 'react';
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
  return(
    <ul>
      <li className='items'><a href="#">DESTEK OL</a></li>
      <li className='items'><a href="#">İLETİŞİME GEÇ</a></li>
      <li className='items'><a href="#">GALERİ</a></li>
      <li className='items'><a href="#">HAKKIMIZDA</a></li>
      <li className='items'><a href="#">HAKKIMIZDA</a></li>
      <button id="lang" className="lang-dropdown">
        <li className='items'>
        <span className="span">TUR</span>
        <i className="fa fa-caret-down"></i>
        </li>
      </button>
        <div className="lang-dropdown-content">
          <a href="#">Eng</a>
        </div>

    </ul>
  );
}

// var dropdown= document.getElementsById("lang");

// dropdown.onclick= function(){
//   alert("merhab");
// }