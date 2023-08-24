import React from "react";

import digitinizer from "../images/portfolio/digitinizer.jpg";
import datavocity from "../images/portfolio/datavocity.jpg";
import hilfeschwester from "../images/portfolio/hilfeschwester.jpg";
import jobs_api from "../images/portfolio/jobs-api.jpg";
import LandingPage from "../images/portfolio/LandingPage.jpg";
import micro_board from "../images/portfolio/micro-board.jpg";
import neontool from "../images/portfolio/neontool.jpg";
import realestate from "../images/portfolio/realestate.jpg";
import Title from "./Title";

const Portfolio = () => {
  return (
    <section className="sec-4" id="portfolio">
      <Title title="Portfolio" />

      <div className="container portfolio-items">
        <div className="row">
          <div className="col-md-4">
            <div className="boxes">
              <img src={digitinizer} className="img-fluid" alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-digitinizer-store.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Digitinizer Ecommerce
                </a>
              </div>
              {/* <!-- /.isotope-overlay --> */}
            </div>
            {/* <!-- /.boxes --> */}
            <div className="boxes">
              <img src={hilfeschwester} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-hilfeschwester.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
              <img src={datavocity} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-data-vocity.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
              <img src={jobs_api} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://bronze-crane-ring.cyclic.app/api-docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jobs API NodeJS
                </a>
              </div>
              {/* <!-- /.isotope-overlay --> */}
            </div>
            {/* <!-- /.boxes --> */}
            <div className="boxes">
              <img src={neontool} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-vision-neon-tool.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
              <img src={LandingPage} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-veterinary-landing.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
              <img src={realestate} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-real-estate.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
              <img src={micro_board} alt="" />
              <div className="isotope-overlay">
                <a
                  href="https://msk-micro-boards.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
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
  );
};

export default Portfolio;
