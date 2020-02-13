
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
const OwnerDetail = () => {



    // not required as this component has no forms or user entry
    // isValidated() {}
    return (
        <div className="step owner-detail">
            <div className="row form-content">
                <Form>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Call Timings</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default OwnerDetail;
