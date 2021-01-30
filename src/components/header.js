import React, { Component } from "react";
import SearchBar from './searchbar';


export class Header extends Component {
    render() {
      return (
          <div id="totalHeader">
            <SearchBar/>
          </div>
      );
    }
}

export default Header;