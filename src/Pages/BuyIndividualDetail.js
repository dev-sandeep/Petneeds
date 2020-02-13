import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Breeds from '../Utility/Breeds'
function BuyDetailPage(props) {
    const urlParam = props.match.params.id;
    const detail = {
        name: 'Loreum Ipsum',
        age: 7,
        gender: 'Male',
        Height: '120cm',
        Weight: '12Kg',
        Breed: urlParam,
        Location: 'Bangalore',
        Price: '12,000 INR'
    }
    return (
        <div className='buy-individual-detail' id='detail-buy'>
            <Nav />
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content">
                                <h1 className="title">{urlParam}</h1>
                                <h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>

                            <div className="col-lg-12 left-align">
                                <div className="row">
                                    <div className="col-lg-6 col-ms-8 col-sm-12 col-xs-12">
                                        {/* image goes here */}
                                        <div className="image-section">
                                            <img className="width-100" src={'https://source.unsplash.com/650x650/?'+urlParam} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-ms-8 col-sm-12 col-xs-12">
                                        {/* details goes here */}
                                        <div className="content">
                                            {Object.keys(detail).map((key)=>(
                                                 <div className="individual-row">
                                                 <span className="title">{key}: </span> <b>{detail[key]}</b>
                                             </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='col-lg-12 contact-btn'>
                                        <button className="btn btn-primary btn-lg">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </div>
        </div>
    );
}

export default BuyDetailPage;