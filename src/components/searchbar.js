import React, { Component } from "react";
import searchImage from '../assets/magnifying.png';
import Select, { components } from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import shoeList from '../assets/shoeNames.json';
import SneakerPage from './sneakerPage';
import { Route, IndexRoute, Router } from 'react-router';


const brandList = ["Jordan 1 Retro...", "Yeezy Boost 350...", "Gucci..."]
var str = "";
var count1 = 0;
var count2 = 0;

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
    }),
  
    option: (styles, { isFocused }, onClick) => {
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
                if(i == 2){
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

    render(){
        if(this.state.selectedOption == null){
            return (
            <Select
            id="SearchBox"
            value={this.state.selectedOption}
            options={searchList}
            onChange={this.handleChange}
            styles={customStyles}
            placeholder= {this.state.place}
            openMenuOnClick={false}
            classNamePrefix= "select"
            styles={customStyles}
            autoFocus={true}
            />
            );
        }
        else{
            return(
                <Router>
                    <Route path="/page/" component={SneakerPage} />
                </Router>
            );
        }
    }
}

export default SearchBar