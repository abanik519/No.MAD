import React, { Component } from "react";
import SearchBar from './searchbar';

import dunes from '../assets/dunes2.png';
import logo from '../assets/logo.png';
import sun from '../assets/logoSun.png';

const list = ["Nike", "Jordan", "Adidas", "Yeezy", "Nike Air"];
export class Header extends Component {
    state = {
    };

    render() {
      return (
          <div id="totalHeader">
            <img src={logo} id="logo" alt="main logo"/>
            <img src={sun} className="sun" alt="sun inside main logo"/>
            <img src={dunes} id="headerDunes" alt="rolling dunes"/>
            <div className="searchBox">
              <SearchBar/>
            </div>
          </div>
      );
    }
}
//                <img src={sun} id="sun" alt="sun inside main logo"/>
export default Header;