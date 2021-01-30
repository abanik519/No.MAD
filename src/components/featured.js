import React, { Component } from "react";

export class Featured extends Component {
    render() {
        return (
            <div id="totalFeatured">
                <div id="navList">
                    <div className="navItem">
                        <p>Sneakers</p>
                    </div>
                    <div className="navItem">
                        <p>Streetwear</p>
                    </div>
                    <div className="navItem">
                        <p>Watches</p>
                    </div>
                    <div className="navItem">
                        <p>Handbags</p>
                    </div>
                    <div className="navItem">
                        <p>Jewellery</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;