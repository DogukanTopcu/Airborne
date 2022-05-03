import React, {useEffect} from "react";
import { Link } from 'react-router-dom'
import "./Nav.css"

const NavBar = (props) => {

    useEffect(() =>{
        window.menu = document.getElementsByClassName("menu")[0];
        window.langsMenu = document.getElementsByClassName("langs-menu")[0];
    },[]);

    const hamham = () => {
        window.menu.classList.toggle("is-active");
    }

    const langlang = () => {
        window.langsMenu.classList.toggle("is-active");
    }

    return (
        <nav>

            <Link className="logo-navigation" to="/"><img className="logo" src="AirborneWhite.png" alt="Airborne Logo" height="43"/></Link>
            
            <div className="menu">
                <button onClick={hamham} className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="menu-content">
                    <p className="menu-items" style={{borderTop:"none"}}><Link to="/">{props.langFilteredProp[0].home}</Link></p>
                    <p className="menu-items"><Link to="/support">{props.langFilteredProp[0].donate}</Link></p>
                    <p className="menu-items"><Link to="/about">{props.langFilteredProp[0].about}</Link></p>
                    <p className="menu-items"><Link to="/contact">{props.langFilteredProp[0].contact}</Link></p>
                    <div className="langs-menu" onClick={langlang}>
                        <p className="lang-menu-items"style={{borderBottom:"none"}}>{props.langFilteredProp[0].languageTitle}</p>
                        <div className="langs-menu-content lang-menu-items">
                            <p><Link onClick={() => props.setLangProp("Turkish")} className="turkish" to="/">{props.langFilteredProp[0].langFirst}</Link></p>
                            <p><Link onClick={() => props.setLang("English")} className="english" to="/">{props.langFilteredProp[0].langSecond}</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        
            <ul className="items-container">
                <li className="items-w-icon"><Link style={{backgroundColor:"none"}} to="/"><i class="fa-solid fa-house"></i></Link></li>
                <li className="items"><Link to="/support">{props.langFilteredProp[0].donate}</Link></li>
                <li className="items"><Link to="/about">{props.langFilteredProp[0].about}</Link></li>
                <li className="items"><Link to="/contact">{props.langFilteredProp[0].contact}</Link></li>
                <li className="langs">
                    <button>{props.langFilteredProp[0].languageTitle}</button>
                    <div className="langs-content">
                        <p><Link onClick={() => props.setLangProp("Turkish")} className="turkish" to="/">{props.langFilteredProp[0].langFirst}</Link></p>
                        <p><Link onClick={() => props.setLang("English")} className="english" to="/">{props.langFilteredProp[0].langSecond}</Link></p>
                    </div>
                </li>
            </ul>
            <ul className="social">
                <li><a href="https://www.instagram.com/airbornerocket/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/airborneroket/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </nav>
    );
}

export default NavBar;