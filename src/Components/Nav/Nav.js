import React from "react";
import { Link } from 'react-router-dom'
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
                    <p style={{borderTop:"none"}}><Link to="/">Home</Link></p>
                    <p><Link to="/donate">Donate</Link></p>
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                    <p style={{borderBottom:"none"}}><a href="">Language</a></p>
                </div>
            </div>
        
            <ul className="items-container">
                <li className="items"><a style={{borderBottom:"none"}} href=""><Link to="/"><i class="fa-solid fa-house"></i></Link></a></li>
                <li className="items"><Link to="/donate">Donate</Link></li>
                <li className="items"><Link to="/about">About</Link></li>
                <li className="items"><Link to="/contact">Contact</Link></li>
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