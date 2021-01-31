import React, { Component } from "react";
import SearchBar from './searchbar';
//import SneakerPage from './sneakerPage';

import dunes from '../assets/dunes2.png';
import logo from '../assets/logo.png';
import sun from '../assets/logoSun.png';

export class Header extends Component {
    state = {
    };

    animation(){
      window.addEventListener('click', function(e){   
        if (document.getElementById('searchBox').contains(e.target)){
          document.getElementById("searchBox").style.transform = "translateY(180px)";
          document.getElementById("searchBox").style.transition= "all 1s ease-in-out";
          document.getElementById("totalHeader").style.backgroundColor = "rgba(240, 195, 47, 0.8)";
          document.getElementById("totalHeader").style.transition= "all 1s ease-in-out";
          document.getElementById("headerDunes").style.bottom = "-350px";
          document.getElementById("totalFeatured").style.marginTop = "250px";
          document.getElementById("headerDunes").style.transition= "all 1s ease-in-out";
          document.getElementById("sun").style.transform = "scale(1.5)";
          document.getElementById("sun").style.marginTop = "77px";
        } else{
          document.getElementById("searchBox").style.transform = "translateY(300px)";
          document.getElementById("totalHeader").style.backgroundColor = " lightblue";
          document.getElementById("headerDunes").style.bottom = "-150px"
          document.getElementById("sun").style.transform = "scale(1)";
          document.getElementById("sun").style.marginTop = "87px";
          document.getElementById("totalFeatured").style.marginTop = "0px";
        }
      });
      
    }

    hover(){
      document.getElementById("sun").style.transform = "scale(1.5)";
      document.getElementById("sun").style.marginTop = "77px";
    }

    notHover(){
      document.getElementById("sun").style.transform = "scale(1)";
      document.getElementById("sun").style.marginTop = "87px"; 
    }

    restart(){
      document.getElementById("searchBox").style.transform = "translateY(300px)";
      document.getElementById("totalHeader").style.backgroundColor = " lightblue";
      document.getElementById("headerDunes").style.bottom = "-150px"
    }

    state = {
      isLight: true,
    };

    render() {
      return (
          <div id="totalHeader" onClick={this.animation}>
              <img src={logo} id="logo" alt="main logo"/>
              <img src={sun} id="sun" alt="sun inside main logo" onMouseEnter={this.hover} onMouseLeave={this.notHover} />
              <img src={dunes} id="headerDunes" alt="rolling dunes"/>
              <div id="searchBox" onClick={this.animation} onCli>
                <SearchBar/>
              </div>
          </div>
      );
    }
}

export default Header;