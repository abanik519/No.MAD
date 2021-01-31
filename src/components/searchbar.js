import React, { Component } from "react";
//import searchImage from '../assets/magnifying.png';
import Select from "react-select";
import shoeList from '../assets/shoeNames.json';
import '../styles/featured.css';
import SneakerPage from './sneakerPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const brandList = ["Jordan 1 Retro...", "Yeezy Boost 350...", "Gucci..."]
var str = "";
var count1 = 0;
var count2 = 0;

const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: 'Arial',
      fontSize: 18,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: 'text',
      borderRadius: 20,
      width: 500,
      padding: 5,
      paddingLeft: 30,
    }),
  
    option: (styles, { isFocused }, onClick) => {
      return {
        ...styles,
        cursor: 'pointer',
        backgroundColor: isFocused ? 'rgba(143, 143, 143, 0.3)' : 'white',
        color: isFocused ? 'rgba(200, 86, 35)' : 'black',
        lineHeight: 2,
        width: 470,
        marginLeft: 15,
        borderRadius: 10,
      }
    },
  
    input: styles => ({
      ...styles,
      color: 'black',
      fontFamily: 'Arial',
    }),
  
    menu: styles => ({
      ...styles,
      boxShadow: 'none',
      width: 500,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 20,
    }),
  
    singleValue: styles => ({
      ...styles,
      color: 'rgba(100, 86, 35)',
      width: 400,
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



export class SearchBar extends Component {
    state = {
        place: "",
        selectedOption: null,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            for(var i = count1; i<3; i++){
                var tmp = brandList[i];
                for(var j = count2; j < tmp.length; j++){
                    str = str.replace("|", "");
                    str += tmp.charAt(j) + "|";
                    this.setState({place: str});
                    count2++;
                    return;
                }
                str = "";
                this.setState({place: ""});
                count2 = 0;
                count1++;
                if(i === 2){
                    count1 = 0;
                    return;
                }
            } 
        }, 200);
    }
    
    componentWillUnmount() {
    clearInterval(this.interval);
    }


    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(selectedOption);
       }

    scrollTo = () => {
      var element_to_scroll_to = document.getElementById('innerSneakerBox');
      element_to_scroll_to.scrollIntoView();
    }

    render(){
          return (
            <Select
            id="SearchBox"
            value={this.state.selectedOption}
            options={searchList}
            onChange={this.scrollTo}
            styles={customStyles}
            placeholder= {this.state.place}
            openMenuOnClick={false}
            classNamePrefix= "select"
            styles={customStyles}
            autoFocus={true}
            />
            );
    }
}

export default SearchBar