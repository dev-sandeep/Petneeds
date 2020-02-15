import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { BrowserRouter as Router, useHistory } from "react-router-dom";
function Partner() {
    const history = useHistory();
    const search = () => {
        history.push('/partner-result');
    }
    return (
        <div className="partner-section" id="partner">
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content">
                                <h1 className="title">Find Partner</h1>
                                <h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>

                            <div className="col-lg-12 left-align">

                                <Form>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Animal Type</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control type="number" placeholder="" />
                                            </Form.Group>

                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Breed</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-12 text-left">
                                            <br />
                                            <button type="submit" onClick={search} class="btn btn-primary mb-2">Search</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            {/* </div> */}
                        </div>
                    </Jumbotron>
                </div>
            </div>

        </div>
    );
}

export default Partner;