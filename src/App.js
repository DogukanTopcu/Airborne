import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import Body from "./Content/body"

class App extends React.Component {

  state= {
    
    language1:"TUR",

    langs: [
      {
        donate:"DONATE",
        contact:"CONTACT",
        gallery:"GALLERY",
        about:"ABOUT US",
        footerTitle:"CONTACT",
        address:"Address:",
        phone:"Phone Number:",
        lang:"ENG"
      },
      {
        donate:"DESTEK OL",
        contact:"İLETİŞİME GEÇ",
        gallery:"GALERİ",
        about:"HAKKIMIZDA",
        footerTitle:"İLETİŞİM BİLGİLERİ",
        address:"Adres:",
        phone: "Telefon Numarası:",
        lang:"TUR"
      }
    ]

  }
  

  setLang = (language) => {
    this.setState({language1: language});
  }

  render(){

    var langFiltered = this.state.langs.filter(
      (langItem) => {
          return langItem.lang === this.state.language1;
      }
    );

    return (
      <div className="App">
        <dir className="container">
          <Navbar
            setLangProp={this.setLang}
            langFilteredProp = {langFiltered}
          />
          <Body/>
      </dir>
        <Footer 
          langFilteredProp={langFiltered}
        />
      </div>
    );
  };
}

export default App;