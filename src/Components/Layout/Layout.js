import React from 'react'
import NavBar from '../Nav/Nav'
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";

class Layout extends React.Component{

  state = {
    languages : [
        {   
            lang : "English",
            langFirst: "Turkish",
            langSecond: "English",
            home: "Home",
            donate: "Support",
            about: "About",
            contact: "Contact",
            languageTitle: "Language"
        },
        {
            lang : "Turkish",
            langFirst: "Türkçe",
            langSecond: "İnglizce",
            home: "Ana Sayfa",
            donate: "Destek Ol",
            about: "Hakkımızda",
            contact: "İletişim",
            languageTitle: "Dil"
        }
    ],

    language: "English"
  }

  setLang = (val) => {
    this.setState({language: val});
  }

  render(){

    var langFiltered = this.state.languages.filter(
      (value) => {return value.lang === this.state.language}
    );

    return (
      <>
          <NavBar
            langFilteredProp = {langFiltered}
            setLangProp = {this.setLang}
          />

          <div className="container-for-content">
              <Outlet/>
          </div>

          <Footer/>
      </>
    );
  }
}

export default Layout;