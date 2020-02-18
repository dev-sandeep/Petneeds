import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Breeds from '../Utility/Breeds'
import PetLoop from '../Components/PetLoop'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

function BuyPage() {
    const [animal, setAnimal] = useState(-1);
    const [type, setType] = useState(0);
    const history = useHistory();

    const num = Breeds().dogs;

    const animalsType = ['Dog', 'Cat', 'Fish'];

    const getAnimalData = () => {

        if (animal == -1) {
            return animalsType;
        } else if (animal == 0) {
            return Breeds().dogs;
        } else if (animal == 1) {
            return Breeds().cats;
        } else {
            return [];
        }
    }

    let data = getAnimalData();
    // const defaultClass = 'col-lg-4 col-sm-6 m-bottom-2p pointer';
    const loopAnimalTypes =
        <PetLoop
            data={animalsType}
            show={type == 0}
            onClick={(item, key) => { setAnimal(key); setType(1) }} />

    const loopAnimals =
        <PetLoop
            data={data}
            show={type == 1}
            onClick={(item) => { history.push('/buy/' + item); }} />

    return (
        <div className="buy-section-individual" id="buy">
            {/* <Nav /> */}
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <div className="content">
                            <div className="title-content">
                                <h1 className="title">Buy <span className='lower-case'>{animalsType[animal] || ''}</span> from owners</h1>
                                <h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>

                            <div className="col-lg-12 left-align">
                                {loopAnimalTypes}
                                {loopAnimals}
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </div>

        </div>
    );
}

export default BuyPage;