import React, { Component } from "react";
//import SearchBar from './searchbar';

import dunes from '../assets/dunes2.png';
import logo from '../assets/logo.svg';
import sun from '../assets/logoSun.png';


export class Header extends Component {
    render() {
      return (
          <div id="totalHeader">
            <img src={logo} id="logo" alt="main logo"/>
            <img src={sun} className="sun" alt="sun inside main logo"/>
            <img src={dunes} id="headerDunes" alt="rolling dunes"/>
          </div>
      );
    }
}
//                <img src={sun} id="sun" alt="sun inside main logo"/>
export default Header;