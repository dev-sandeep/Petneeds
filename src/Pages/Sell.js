import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Breeds from '../Utility/Breeds'
import StepZilla from 'react-stepzilla'
import PetDetail from '../Components/SellComponents/PetDetail'
import OwnerDetail from '../Components/SellComponents/OwnerDetail'
import Upload from '../Components/SellComponents/Upload'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory

} from "react-router-dom";

function Sell() {
    const steps = [
        { name: 'Pet Details', component: <PetDetail /> },
        { name: 'Owner Details', component: <OwnerDetail /> },
        { name: 'Upload Picture', component: <Upload /> },
    ]

    return (
        <div className="sell-section" id="buy">
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <StepZilla 
                            nextButtonCls="btn btn-next btn-primary btn-lg pull-right"
                            backButtonCls="btn btn-prev btn-primary btn-lg pull-left"
                            showNavigation={true} 
                            prevBtnOnLastStep={false}
                            steps={steps} />
                        </div>
                    </Jumbotron>
                </div>
            </div>
        </div>
    );
}

export default Sell;