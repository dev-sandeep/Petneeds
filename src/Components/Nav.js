import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {

    return (
        <div className="nav-section" id="nav">

            <nav className="navbar navbar-expand-lg navbar-light top-style py-3" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to=''>PetNeeds</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Buy</a>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item pointer" to='/buy'>Individual</Link>
                                    <Link className="dropdown-item pointer" to=''>Shops</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to='/sell'>Sell</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to='/partner'>Find Partner</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">User</a>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item pointer" to='/profile'>Profile</Link>
                                    <Link className="dropdown-item pointer" to='/post-ad'>Post Ads</Link>
                                    <Link className="dropdown-item pointer" to='/profile'>Manage Ads</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Nav;