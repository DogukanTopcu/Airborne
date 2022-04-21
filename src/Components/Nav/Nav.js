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
                    <p style={{borderTop:"none"}}><Link to="/">{this.props.langFilteredProp[0].home}</Link></p>
                    <p><Link to="/donate">{this.props.langFilteredProp[0].donate}</Link></p>
                    <p><Link to="/about">{this.props.langFilteredProp[0].about}</Link></p>
                    <p><Link to="/contact">{this.props.langFilteredProp[0].contact}</Link></p>
                    <p style={{borderBottom:"none"}}><a href="">{this.props.langFilteredProp[0].languageTitle}</a></p>
                </div>
            </div>
        
            <ul className="items-container">
                <li className="items"><a style={{borderBottom:"none"}} href=""><Link to="/"><i class="fa-solid fa-house"></i></Link></a></li>
                <li className="items"><Link to="/donate">{this.props.langFilteredProp[0].donate}</Link></li>
                <li className="items"><Link to="/about">{this.props.langFilteredProp[0].about}</Link></li>
                <li className="items"><Link to="/contact">{this.props.langFilteredProp[0].contact}</Link></li>
                <li className="langs">
                    <button>{this.props.langFilteredProp[0].languageTitle}</button>
                    <div className="langs-content">
                        <p><Link onClick={() => this.props.setLangProp("Turkish")} className="turkish" to="/">{this.props.langFilteredProp[0].langFirst}</Link></p>
                        <p><Link onClick={() => this.props.setLang("English")} className="english" to="/">{this.props.langFilteredProp[0].langSecond}</Link></p>
                    </div>
                </li>
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