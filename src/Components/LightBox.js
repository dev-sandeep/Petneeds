import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import StepZilla from 'react-stepzilla'
import Step1 from './BuyComponents/Step1'
import Step2 from './BuyComponents/Step2'
function LightBox(props) {
    const [show, setShow] = useState(false);

    const steps = [
        {name: 'Buy 1', component: <Step1 />},
        {name: 'Buy 2', component: <Step2 />},
    ]

    return (
        <div className="light-box-section" id="sell">
            <div className={props.classNameArr} variant="primary" onClick={() => setShow(true)}>
                {props.text}
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <StepZilla showNavigation={true} steps={steps} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LightBox;