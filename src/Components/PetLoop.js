import React from 'react';

function PetLoop(props) {
    const data = props.data;
    const defaultClass = 'col-lg-4 col-sm-6 m-bottom-2p pointer';

    let loopPets = data.map((item, key) => (
        <div key={key} className={defaultClass + (props.show ? ' show' : ' hide')} onClick={() => { props.onClick(item, key) }}>
            <img className="img-fluid" src={'https://source.unsplash.com/650x350/?' + item} alt="" />
            <div className="portfolio-box-caption list-desc">
                {item}
            </div>
        </div>
    ));
    return (
        <div className="loop-pets-section" id="loop-section">
            <div className="row">
                {loopPets}
            </div>
        </div>
    );
}

export default PetLoop;