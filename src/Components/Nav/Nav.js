import React from "react";
import "./Nav.css"

class NavBar extends React.Component{

    componentDidMount(){
        this.hamburger = document.getElementsByClassName("hamburger")[0];
    }

    hamham = () => {
        this.hamburger.classList.toggle("is-active");
    }

    render() {
      return (
        <nav>
            <img className="logo" src="AirborneWhite.png" alt="Airborne Logo" height="45"/>
            <button onClick={this.hamham} className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <ul>
                <li className="items"><a href="">Home</a></li>
                <li className="items"><a href="">Donate</a></li>
                <li className="items"><a href="">About</a></li>
                <li className="items"><a href="">Contact</a></li>
                <li className="items"><a href="">Projects</a></li>
            </ul>
        </nav>
      )
    }
}

export default NavBar;