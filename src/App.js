import "./style.css";
import "./responsive.css";

import profile_image from "./images/about/profile_image.jpg";
import logo from "./images/logo/logo.png";

import digitinizer from "./images/portfolio/digitinizer.jpg";
import datavocity from "./images/portfolio/datavocity.jpg";
import hilfeschwester from "./images/portfolio/hilfeschwester.jpg";
import jobs_api from "./images/portfolio/jobs-api.jpg";
import LandingPage from "./images/portfolio/LandingPage.jpg";
import micro_board from "./images/portfolio/micro-board.jpg";
import neontool from "./images/portfolio/neontool.jpg";
import realestate from "./images/portfolio/realestate.jpg";

import bootstrap from "./images/clients/bootstrap.png";
import css from "./images/clients/css.png";
import git from "./images/clients/git.png";
import github from "./images/clients/github.png";
import html from "./images/clients/html.png";
import js from "./images/clients/js.png";
import json from "./images/clients/json.png";
import jwt from "./images/clients/jwt.png";
import mongodb from "./images/clients/mongodb.png";
import nodejs from "./images/clients/nodejs.png";
import npm from "./images/clients/npm.png";
import php from "./images/clients/php.png";
import react from "./images/clients/react.png";
import vscode from "./images/clients/vscode.png";

import React from "react";

const App = () => {
  return (
    <>
      {/* <!-- Back to top button --> */}
      <a id="button"></a>
      {/* <!-- Header css start --> */}

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-margin">
          <a className="navbar-brand mr-auto" href="#">
            <img src={logo} alt="" className="nav-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="nav-item active">
                <a className="nav-link" href=".sec-3">
                  Education <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Technologies
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <section className="sec-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>
                  hi <span>,</span> i am <br />
                  Muhammad Salman Khan <span>.</span>
                </h2>
                <p>Full Stack Developer</p>
                {/* <!-- <a
                href="https://drive.google.com/uc?export=download&id=1NNZJLMBwxVfgNBbXMDz2jvp53Z7q0Efm"
                download
                >download resume</a
              > --> */}
              </div>
              {/* <!--/.header-text--> */}
            </div>
            {/* <!--/.col--> */}
          </div>
          {/* <!-- /.row--> */}
        </div>
        {/* <!-- /.container--> */}
      </section>

      <section className="sec-2">
        <h2 className="text-center">About Me</h2>

        <div className="container">
          <div className="row">
            <div className="col-md-6 about-me-left">
              <h3>
                My name is Muhammad Salman Khan. I hold a Bachelors degree in
                Computer Science. I am a passionate full-stack developer located
                in Pakistan.
              </h3>
              <p>
                I have a strong interest in crafting full-stack websites from
                the ground up. I have a strong interest in crafting responsive
                websites from the ground up. The array of technologies, tools,
                and languages I employ for my projects include HTML, CSS,
                Bootstrap, JavaScript, React Js, Node Js, Express Js, MongoDB,
                PHP, MySQL, Git and GitHub, Figma, as well as VS Code. <br />
                <br />I have eagerness to learn something new every day and I
                love to share my knowledge to my fellow developers. And I am
                looking forward to talk with you!
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>phone</h3>
                    <p>+92-3072298340</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>Email</h3>
                    <p>muhammadsalman410@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-about-img">
                <img src={profile_image} alt="" />

                <div className="profile-img-icons">
                  <a href="https://www.linkedin.com/in/msk-wd/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/SaLmAn410acc" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-3">
        <h2 className="text-center">Education</h2>
        <div className="container">
          <div className="row education-boxes">
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2016 - 2017</h2>
                  <h3>S.S.C (Computer Science)</h3>
                </div>
                {/* <!--/.experience-time--> */}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Hasan Aly Chapter School</h4>
                    <h5>Karachi, Pakistan</h5>
                  </div>
                  {/* <!--/.timeline-content--> */}
                </div>
                {/* <!--/.timeline--> */}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2018 - 2019</h2>
                  <h3>H.S.S.C (Pre-Engineering)</h3>
                </div>
                {/* <!--/.experience-time--> */}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Govt. National College</h4>
                    <h5>Karachi, Pakistan</h5>
                  </div>
                  {/* <!--/.timeline-content--> */}
                </div>
                {/* <!--/.timeline--> */}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2019 - 2023,</h2>
                  <h3>BSCS (Computer Science)</h3>
                </div>
                {/* <!--/.experience-time--> */}
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">Mohammad Ali Jinnah University</h4>
                    <h5>Karachi, Pakistan</h5>
                  </div>
                  {/* <!--/.timeline-content--> */}
                </div>
                {/* <!--/.timeline--> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-4">
        <h2 className="text-center">Portfolio</h2>

        <div className="container portfolio-items">
          <div className="row">
            <div className="col-md-4">
              <div className="boxes">
                <img
                  src={digitinizer}
                  className="img-fluid"
                  alt="portfolio image"
                />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-digitinizer-store.netlify.app/"
                    target="_blank"
                  >
                    Digitinizer Ecommerce
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
              <div className="boxes">
                <img src={hilfeschwester} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-hilfeschwester.netlify.app/"
                    target="_blank"
                  >
                    Hilfeschwester Appointment
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>

              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              <div className="boxes">
                <img src={datavocity} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-data-vocity.netlify.app/"
                    target="_blank"
                  >
                    Data Vocity
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              <div className="boxes">
                <img src={jobs_api} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://bronze-crane-ring.cyclic.app/api-docs/"
                    target="_blank"
                  >
                    Jobs API NodeJS
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
              <div className="boxes">
                <img src={neontool} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-vision-neon-tool.netlify.app/"
                    target="_blank"
                  >
                    Neon Vision Customiztion Tool
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              <div className="boxes">
                <img src={LandingPage} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-veterinary-landing.netlify.app/"
                    target="_blank"
                  >
                    Veterinary Landing Page
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              <div className="boxes">
                <img src={realestate} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-real-estate.netlify.app/"
                    target="_blank"
                  >
                    Real Estate
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              <div className="boxes">
                <img src={micro_board} alt="portfolio image" />
                <div className="isotope-overlay">
                  <a
                    href="https://msk-micro-boards.netlify.app/"
                    target="_blank"
                  >
                    Mechanical Boards
                  </a>
                </div>
                {/* <!-- /.isotope-overlay --> */}
              </div>
              {/* <!-- /.boxes --> */}
            </div>
            {/* <!-- /.col --> */}

            {/* <!-- /.col --> */}
          </div>
        </div>
      </section>

      <section className="sec-5">
        <h2 className="text-center">Technologies I Worked with</h2>
        <div className="container my-5">
          <div className="row owl-carousel owl-theme">
            <div className="item">
              <img src={html} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={css} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={bootstrap} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={js} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={react} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={nodejs} alt="" className="img-fluid" />
            </div>

            {/* <!-- next line --> */}

            <div className="item">
              <img src={mongodb} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={jwt} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={json} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={php} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={vscode} alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src={git} alt="" className="img-fluid" />
            </div>

            <div className="item">
              <img src={github} alt="" className="img-fluid" />
            </div>

            <div className="item">
              <img src={npm} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© copyright M.Salman Khan. design and developed by M.Salman Khan</p>
      </footer>
    </>
  );
};

export default App;
