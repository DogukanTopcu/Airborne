import React from "react";
import "./navbar.css";
//import "../bootstrap.css";

class Navbar extends React.Component{

  state = {
    signal:false,
    language:"TUR",
    dropDownContentLanguage:"ENG"
  }

  componentDidMount(){
    this.dropdownContent = document.getElementsByClassName("lang-dropdown-content");
    this.iconDown = document.getElementById("icon-down");
    this.iconUp = document.getElementById("icon-up");
  }

  setDropDown = () => {

    if (this.state.signal !== true) { 

      this.iconDown.style.display = "none";
      this.iconUp.style.display = "inline-block";
      for (var i = 0; i < this.dropdownContent.length; i++) {
        this.dropdownContent[i].style.display = "block";
      }
      this.setState({signal: !this.state.signal});

    }else{

      this.iconDown.style.display = "inline-block";
      this.iconUp.style.display = "none";
      for (i = 0; i < this.dropdownContent.length; i++) {
        this.dropdownContent[i].style.display = "none";
      }
      this.setState({signal: !this.state.signal});
    }
  };

  setLangArgument= () => {

    if (this.state.language === "TUR"){
      this.setState({signal: !this.state.signal});
      this.iconDown.style.display = "inline-block";
      this.iconUp.style.display = "none";
  
      for (var i = 0; i < this.dropdownContent.length; i++) {
        this.dropdownContent[i].style.display = "none";
        this.dropdownContent[i].style.marginLeft = "411.71px";
      }
      this.setState({language:"ENG", dropDownContentLanguage:"TUR"});
      this.props.setLangProp("ENG");

    }else{
      this.setState({signal: !this.state.signal});
      this.iconDown.style.display = "inline-block";
      this.iconUp.style.display = "none";
  
      for ( i = 0; i < this.dropdownContent.length; i++) {
        this.dropdownContent[i].style.display = "none";
        this.dropdownContent[i].style.marginLeft = "468.96px";
      }
      this.setState({language:"TUR", dropDownContentLanguage:"ENG"});
      this.props.setLangProp("TUR");
    }
  }

  render(){
    return (
      <nav>
        <div id="logo"><a href="#"></a></div>
        <ul>
          <li className='items'><a href="#">{this.props.langFilteredProp[0].donate}</a></li>
          <li className='items'><a href="#">{this.props.langFilteredProp[0].contact}</a></li>
          <li className='items'><a href="#">{this.props.langFilteredProp[0].gallery}</a></li>
          <li className='items'><a href="#">{this.props.langFilteredProp[0].about}</a></li>
          <button onClick={this.setDropDown} id="lang" className="lang-dropdown">
            <li className='items'>
              <span className="span">{this.state.language}</span>
              <div id="icon-down" ><i className="fa-solid fa-angle-down"></i></div>
              <div id="icon-up" ><i className="fa-solid fa-angle-up"></i></div>
            </li>
          </button>
          <div className="lang-dropdown-content" onClick={this.setLangArgument} >
            <a>{this.state.dropDownContentLanguage}</a>
          </div>
        </ul>
      </nav>
    );
  };
}

export default Navbar;