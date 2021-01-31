import React, { Component } from "react";

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
            document.getElementById("onSneaker").style.display = "block"
            document.getElementById("onStreetwear").style.display = "none";
            document.getElementById("onWatches").style.display = "none";
            document.getElementById("onHandbags").style.display = "none";
            document.getElementById("onJewellery").style.display = "none";
          }
          
        document.getElementById("sneakerBox").style.display = "flex";
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
          document.getElementById("streetwearBox").style.display = "flex";
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
          document.getElementById("watchBox").style.display = "flex";
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
          document.getElementById("handBox").style.display = "flex";
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
          document.getElementById("jewelleryBox").style.display = "flex";
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
                        <p className="navText">STREETWEAR</p>
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
                    Sneakers
                </div>
                <div id="streetwearBox">
                    Streetwear
                </div>
                <div id="watchBox">
                    Watches
                </div>
                <div id="handBox">
                    Handbags
                </div>
                <div id="jewelleryBox">
                    Jewellery
                </div>
            </div>
        );
    }
}

export default Featured;