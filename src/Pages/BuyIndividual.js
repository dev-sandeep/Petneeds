import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'

function BuyPage() {
    const num = [1, 2, 3, 44, 5, , 6, 7, 78, 5];
    const loop = num.map(() => (
        <div className="col-lg-4 col-sm-6 margin-5">
            <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt="" />
            <div className="portfolio-box-caption">
            </div>
        </div>
    ));

    return (
        <div className="buy-section" id="buy">
            <Nav />
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <h1>Buy</h1>
                        <h6>
                            Get home the happiness.
                        </h6>
                        <div className="col-lg-12 left-align">
                            <div className="row">
                                {loop}
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </div>

        </div>
    );
}

export default BuyPage;