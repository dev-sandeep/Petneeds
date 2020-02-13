import React from 'react';

function Nav() {
    return (
        <div className="nav-section" id="nav">
            <nav className="navbar navbar-expand-lg navbar-light top-style py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/">PetNeeds</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Buy</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item pointer" href="/buy">Individual</a>
                                    <a class="dropdown-item pointer">Shops</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/sell">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;