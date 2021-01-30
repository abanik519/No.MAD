import React, { Component } from "react";

export class Featured extends Component {
    state = {
        isSneaker: true,
        isStreetwear: false,
    };

    SneakerActive = () => {
        this.setState({ isSneaker: true});
        this.setState({ isStreetwear: false});
        if(
          document.getElementById("sneakers")
          ){
            document.getElementById("sneakers").style.borderBottom = "10px solid #000000";
            document.getElementById("streetwear").style.borderBottom = "0px solid #000000";
          }
       
    }

    StreetwearActive = () => {
        this.setState({ isSneaker: false});
        this.setState({ isStreetwear: true});
        if(
          document.getElementById("streetwear")
          ){
            document.getElementById("streetwear").style.borderBottom = "10px solid #000000";
            document.getElementById("sneakers").style.borderBottom = "0px solid #000000";
          }
    }

    render() {
        return (
            <div id="totalFeatured">
                <div id="navList">
                    <div id="sneakers" className="navItem" 
                    onClick={this.SneakerActive}>
                        SNEAKERS
                    </div>
                    <div id="streetwear" className="navItem"
                    onClick={this.StreetwearActive}>
                        STREETWEAR
                    </div>
                    <div className="navItem">
                        WATCHES
                    </div>
                    <div className="navItem">
                        HANDBAGS
                    </div>
                    <div className="navItem">
                        JEWELLERY
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;