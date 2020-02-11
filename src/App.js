import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Buy from './Components/Buy'
import Sell from './Components/Sell'
import LightBox from './Components/LightBox'
import Header from './Components/Header'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">PetNeeds</a>
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
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#buy">Buy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#sell">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



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
            <LightBox text="Say Hello" classNameArr="btn btn-light btn-xl m-10" />
            <LightBox text="Say Goodbye" classNameArr="btn btn-light btn-xl m-10" />
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

export default App;
