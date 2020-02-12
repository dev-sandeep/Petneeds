import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Breeds from '../Utility/Breeds'
function BuyPage() {
    const num = Breeds().dogs;
    const loop = num.map((item) => (
        <div className="col-lg-4 col-sm-6 m-bottom-2p">
            <img className="img-fluid" src="https://source.unsplash.com/650x350/?dog,cat" alt="" />
            <div className="portfolio-box-caption list-desc">
                {item}
            </div>
        </div>
    ));

    return (
        <div className="buy-section-individual" id="buy">
            <Nav />
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content">
                                <h1 className="title">Buy from owners</h1>
                                <h6>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>

                            <div className="col-lg-12 left-align">
                                <div className="row">
                                    {loop}
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </div>

        </div>
    );
}

export default BuyPage;