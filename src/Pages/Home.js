import React from 'react';
import About from '../Components/About'
import Services from '../Components/Services'
import Portfolio from '../Components/Portfolio'
import Buy from '../Components/Buy'
import Sell from '../Components/Sell'
import LightBox from '../Components/LightBox'
import Header from '../Components/Header'
import Contact from '../Components/Contact'
import Nav from '../Components/Nav'
function HomePage() {
    return (
        <div className="home-section" id="home">
            <Header />
            <About />
            <Services />
            <Portfolio />

            <section className="page-section bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Have someone special in your home today.</h2>
                    {/* <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Say Hello</a> &nbsp; */}
                    {/* <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Say Goodbye</a> */}
                    <div className="inline-buttons">
                        <LightBox text="Buy" classNameArr="btn btn-light btn-xl m-10" />
                        <LightBox text="Sell" classNameArr="btn btn-light btn-xl m-10" />
                    </div>
                </div>
            </section>


            <Contact />


            <footer className="bg-light py-5">
                <div className="container">
                    <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap</div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;