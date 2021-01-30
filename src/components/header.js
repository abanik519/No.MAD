import React, { Component, useState } from "react";
import SearchBar from './searchbar';

const list = ["Nike", "Jordan", "Adidas", "Yeezy", "Nike Air"];
export class Header extends Component {
    state = {
    };



    render() {
      return (
          <div id="totalHeader">
            <SearchBar/>
          </div>
      );
    }
}

export default Header;