import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
function PartnerResult() {

    return (
        <div className="partner-section" id="partner">
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content">
                                <h1 className="title">Possible Matches</h1>
                                <h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>

                            <div className="col-lg-12 left-align">
                                
                            </div>
                            {/* </div> */}
                        </div>
                    </Jumbotron>
                </div>
            </div>

        </div>
    );
}

export default PartnerResult;