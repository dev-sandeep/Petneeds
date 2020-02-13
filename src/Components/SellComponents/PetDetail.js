
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
const Step1 = () => {



    // not required as this component has no forms or user entry
    // isValidated() {}
    return (
        <div className="step pet-detail">
            <div className="row form-content">
                <Form>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Breed</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Vaccination</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>




                </Form>
            </div>
        </div>
    )
}

export default Step1;
