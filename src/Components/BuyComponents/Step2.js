
import React, { Component } from 'react';

export default class Step2 extends Component {
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
            <div className="step step2">
                <div className="row">
                    <form id="Form" className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-12 control-label">
                                <h1>Step 2: Buy-2</h1>
                              
                            </label>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Text</label>
                                    <input type="text" className="col-lg-12" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
