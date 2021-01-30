import React from 'react';
import searchImage from '../assets/magnifying.png';
import Select, { components } from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import shoeList from '../assets/shoeNames.json';


const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: 'Times New Roman',
      fontSize: 18,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: 'text',
      borderRadius: 20,
      width: 500,
      padding: 5,
      paddingLeft: 30,
      borderBottom: 'solid 1px',
    }),
  
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: 'pointer',
        backgroundColor: isFocused ? 'rgba(100, 86, 35)' : 'white',
        color: isFocused ? 'rgba(200, 86, 35)' : 'black',
        lineHeight: 2,
      }
    },
  
    input: styles => ({
      ...styles,
      color: 'black',
      fontFamily: 'Times New Roman, Times, Serif',
    }),
  
    menu: styles => ({
      ...styles,
      marginTop: 0,
      boxShadow: 'none',
      width: 450,
      marginLeft: 25,
      borderRadius: 0,
    }),
  
    singleValue: styles => ({
      ...styles,
      color: 'rgba(100, 86, 35)',
    }),
  }

const searchList = shoeList.map(
({ name }) => {
    return{ 
    value: name, 
    label: name 
    }
    }
);


const SearchBar = () => {

  return (
    <Select options={searchList}
    styles={customStyles}
    placeholder= "Search..."
    openMenuOnClick={false}
    
    classNamePrefix= "select"
    styles={customStyles}

    />
  );
}

export default SearchBar