
import React, { Component } from 'react';

export default class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() { }

    componentWillUnmount() { }

    // not required as this component has no forms or user entry
    // isValidated() {}

    render() {
        return (
            <div className="step step1">
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-12 control-label">
                                <h1>Step 1: Buy</h1>
                              
                            </label>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Name</label>
                                    <input type="text" placeholder="Name" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
