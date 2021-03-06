
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
const Upload = () => {



    // not required as this component has no forms or user entry
    // isValidated() {}
    return (
        <div className="step owner-detail">
            <div className="row form-content">
                <Form>
                    <div className="row m-top-bottom-50">
                        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                            <Form.Group controlId="formGroupEmail">
                                {/* <Form.Label>Upload</Form.Label> */}
                                <div className='btn btn-sm btn-warning'>Upload</div>
                            </Form.Group>
                            <div className="">
                                <button className="btn btn-lg btn-primary m-top-30">Save</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Upload;
