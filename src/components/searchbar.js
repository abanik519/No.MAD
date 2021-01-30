import React from 'react';
import searchImage from '../assets/magnifying.png';

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <div>
        <input 
        type={searchImage}
        className="searchBox"
        key="random1"
        value={keyword}
        placeholder={"Search..."}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <img src={searchImage}></img>
    </div>
  );
}

export default SearchBar