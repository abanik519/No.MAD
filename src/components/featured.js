import React, { Component } from "react";

import oasis from '../assets/oasis.png';
import featured_box1 from '../assets/featuredShoes1.json';
import featured_box2 from '../assets/featuredShoes2.json';
import nometer from '../assets/nometer.svg';

export class Featured extends Component {
    state = {
        isSneaker: true,
        isStreetwear: false,
        isWatch: false,
        isHandbag: false,
        isJewellery: false,
    };

    SneakerActive = () => {
        this.setState({ isSneaker: true});
        this.setState({ isStreetwear: false});
        this.setState({ isWatch: false});
        this.setState({ isHandbag: false});
        this.setState({ isJewellery: false});
        if(
          document.getElementById("sneakers") &&
          document.getElementById("onSneaker")
          ){
            document.getElementById("onSneaker").style.display = "block";
            document.getElementById("onStreetwear").style.display = "none";
            document.getElementById("onWatches").style.display = "none";
            document.getElementById("onHandbags").style.display = "none";
            document.getElementById("onJewellery").style.display = "none";
          }
          
        document.getElementById("sneakerBox").style.display = "block";
        document.getElementById("streetwearBox").style.display = "none";
        document.getElementById("watchBox").style.display = "none";
        document.getElementById("handBox").style.display = "none";
        document.getElementById("jewelleryBox").style.display = "none";
    }

    StreetwearActive = () => {
        this.setState({ isSneaker: false});
        this.setState({ isStreetwear: true});
        this.setState({ isWatch: false});
        this.setState({ isHandbag: false});
        this.setState({ isJewellery: false});
        if(
          document.getElementById("streetwear") &&
          document.getElementById("onStreetwear")
          ){
            document.getElementById("onSneaker").style.display = "none"
            document.getElementById("onStreetwear").style.display = "block";
            document.getElementById("onWatches").style.display = "none";
            document.getElementById("onHandbags").style.display = "none";
            document.getElementById("onJewellery").style.display = "none";
          }
        
          document.getElementById("sneakerBox").style.display = "none";
          document.getElementById("streetwearBox").style.display = "block";
          document.getElementById("watchBox").style.display = "none";
          document.getElementById("handBox").style.display = "none";
          document.getElementById("jewelleryBox").style.display = "none";
    }

    WatchesActive = () => {
        this.setState({ isSneaker: false});
        this.setState({ isStreetwear: false});
        this.setState({ isWatch: true});
        this.setState({ isHandbag: false});
        this.setState({ isJewellery: false});
        if(
          document.getElementById("watches") &&
          document.getElementById("onWatches")
          ){
            document.getElementById("onSneaker").style.display = "none"
            document.getElementById("onStreetwear").style.display = "none";
            document.getElementById("onWatches").style.display = "block";
            document.getElementById("onHandbags").style.display = "none";
            document.getElementById("onJewellery").style.display = "none";
          }

          document.getElementById("sneakerBox").style.display = "none";
          document.getElementById("streetwearBox").style.display = "none";
          document.getElementById("watchBox").style.display = "block";
          document.getElementById("handBox").style.display = "none";
          document.getElementById("jewelleryBox").style.display = "none";
    }

    HandbagsActive = () => {
        this.setState({ isSneaker: false});
        this.setState({ isStreetwear: false});
        this.setState({ isWatch: false});
        this.setState({ isHandbag: true});
        this.setState({ isJewellery: false});
        if(
          document.getElementById("streetwear") &&
          document.getElementById("onStreetwear")
          ){
            document.getElementById("onSneaker").style.display = "none"
            document.getElementById("onStreetwear").style.display = "none";
            document.getElementById("onWatches").style.display = "none";
            document.getElementById("onHandbags").style.display = "block";
            document.getElementById("onJewellery").style.display = "none";
          }

          document.getElementById("sneakerBox").style.display = "none";
          document.getElementById("streetwearBox").style.display = "none";
          document.getElementById("watchBox").style.display = "none";
          document.getElementById("handBox").style.display = "block";
          document.getElementById("jewelleryBox").style.display = "none";
    }

    JewelleryActive = () => {
        this.setState({ isSneaker: false});
        this.setState({ isStreetwear: false});
        this.setState({ isWatch: false});
        this.setState({ isHandbag: false});
        this.setState({ isJewellery: true});
        if(
          document.getElementById("streetwear") &&
          document.getElementById("onStreetwear")
          ){
            document.getElementById("onSneaker").style.display = "none"
            document.getElementById("onStreetwear").style.display = "none";
            document.getElementById("onWatches").style.display = "none";
            document.getElementById("onHandbags").style.display = "none";
            document.getElementById("onJewellery").style.display = "block";
          }

          document.getElementById("sneakerBox").style.display = "none";
          document.getElementById("streetwearBox").style.display = "none";
          document.getElementById("watchBox").style.display = "none";
          document.getElementById("handBox").style.display = "none";
          document.getElementById("jewelleryBox").style.display = "block";
    }

    priceChange() {
        console.log("hello world");
        if((featured_box1.averagePrice/featured_box1.retailPrice) >= 0.5) {
            console.log("hello world");
            document.getElementById("priceChange").style.backgroundImage = "../assets/goodPrice.svg";
        }
    }

    render() {
        return (
            <div id="totalFeatured">
                <div id="navList">
                    <div id="sneakers" className="navItem" 
                    onClick={this.SneakerActive}>
                        <p className="navText">SNEAKERS</p>
                        <div className="underline" style={{display: "block"}} id="onSneaker"></div>
                    </div>
                    <div id="streetwear" className="navItem"
                    onClick={this.StreetwearActive}>
                        <p className="navText">APPAREL</p>
                        <div className="underline" id="onStreetwear"></div>
                    </div>
                    <div id="watches" className="navItem"
                    onClick={this.WatchesActive}>
                        <p className="navText">WATCHES</p>
                        <div className="underline" id="onWatches"></div>
                    </div>
                    <div id="handbags" className="navItem"
                    onClick={this.HandbagsActive}>
                        <p className="navText">HANDBAGS</p>
                        <div className="underline" id="onHandbags"></div>
                    </div>
                    <div id="jewellery" className="navItem"
                    onClick={this.JewelleryActive}>
                        <p className="navText">JEWELLERY</p>
                        <div className="underline" id="onJewellery"></div>
                    </div>
                </div>

                <div id="sneakerBox" >
                    <div id="innerSneakerBox">
                        <p className="smallT">FEATURED SNEAKERS</p>
                        <div className="cardBox">
                            {featured_box1.map(shoe => 
                            <div className="card">
                                <div className="placeHolderImg">
                                    <img src={shoe.thumbnailImgage} className="cardImg" alt="placeholders"></img>
                                </div>
                                <div className="placeHolderInfo">
                                    <p className="tinyT">{shoe.name}</p>
                                </div>
                                <div className="placeHolderNo">
                                    <p className="medT">Drip Factor</p>
                                    <p className="hugeT">No.{shoe.drip}</p>
                                </div>
                            </div>
                            )}
                        </div>

                        <div className="cardBox">
                            {featured_box2.map(shoe => 
                            <div className="card">
                                <div className="placeHolderImg">
                                    <img src={shoe.thumbnailImgage} className="cardImg" alt="placeholders"></img>
                                </div>
                                <div className="placeHolderInfo">
                                    <p className="tinyT">{shoe.name}</p>
                                </div>
                                <div className="placeHolderNo">
                                    <p className="medT">Drip Factor</p>
                                    <p className="hugeT">No.{shoe.drip}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div id="streetwearBox">
                    <p className="errorText">WE'RE SORRY...</p>
                    <img src={oasis} id="oasis" alt="coming soon oasis" />
                    <div>
                        <p className="boxText smallT">Apparel coming soon to</p>
                        <p className="boxText bigT">No.MAD</p>
                    </div>
                </div>
                <div id="watchBox">
                    <p className="errorText">WE'RE SORRY...</p>
                    <img src={oasis} id="oasis" alt="coming soon oasis" />
                    <div>
                        <p className="boxText smallT">Watches coming soon to</p>
                        <p className="boxText bigT">No.MAD</p>
                    </div>
                </div>
                <div id="handBox">
                    <p className="errorText">WE'RE SORRY...</p>
                    <img src={oasis} id="oasis" alt="coming soon oasis" />
                    <div>
                        <p className="boxText smallT">Handbags coming soon to</p>
                        <p className="boxText bigT">No.MAD</p>
                    </div>
                </div>
                <div id="jewelleryBox">
                    <p className="errorText">WE'RE SORRY...</p>
                    <img src={oasis} id="oasis" alt="coming soon oasis" />
                    <div>
                        <p className="boxText smallT">Jewellery coming soon to</p>
                        <p className="boxText bigT">No.MAD</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;