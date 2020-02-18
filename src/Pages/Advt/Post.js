import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function PostAdvt() {

    return (
        <div className="post-advt-section" id="post-advt">
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content text-weight-100">
                                <h1 className="title">Post new advertisement</h1>
                                <h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Height</Form.Label>
                                                <Form.Control type="number" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Color</Form.Label>
                                                <Form.Control type="number" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                {/* <Form.Label>Pictures</Form.Label> */}
                                                <div>
                                                <Button variant="secondary" size="sm">
                                                   Upload Pictures +
                                                </Button>
                                                </div>
                                            </Form.Group>

                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Weight</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control as="textarea" rows="3" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-12 text-left">
                                            <br />
                                            <button type="submit" class="btn btn-primary mb-2">Save</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </div>
        </div>
    );
}

export default PostAdvt;