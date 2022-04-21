import React from "react";
import "./Nav.css"

class NavBar extends React.Component{

    componentDidMount(){
        this.menu = document.getElementsByClassName("menu")[0];
    }

    hamham = () => {
        this.menu.classList.toggle("is-active");
    }

    render() {
      return (
        <nav>
            <img className="logo" src="AirborneWhite.png" alt="Airborne Logo" height="43"/>
            <div className="menu">
                <button onClick={this.hamham} className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="menu-content">
                    <p style={{borderTop:"none"}}><a href="">Home</a></p>
                    <p><a href="">Donate</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Contact</a></p>
                    <p style={{borderBottom:"none"}}><a href="">Language</a></p>
                </div>
            </div>
        
            <ul className="items-container">
                <li className="items"><a style={{borderBottom:"none"}} href=""><i class="fa-solid fa-house"></i></a></li>
                <li className="items"><a href="">Donate</a></li>
                <li className="items"><a href="">About</a></li>
                <li className="items"><a href="">Contact</a></li>
                <li className="items"><a href="">Language</a></li>
            </ul>
            <ul className="social">
                <li><a href="https://www.instagram.com/airbornerocket/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/airborneroket/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </nav>
      )
    }
}

export default NavBar;