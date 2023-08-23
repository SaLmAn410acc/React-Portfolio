import React from "react";

import bootstrap from "../images/clients/bootstrap.png";
import css from "../images/clients/css.png";
import git from "../images/clients/git.png";
import github from "../images/clients/github.png";
import html from "../images/clients/html.png";
import js from "../images/clients/js.png";
import json from "../images/clients/json.png";
import jwt from "../images/clients/jwt.png";
import mongodb from "../images/clients/mongodb.png";
import nodejs from "../images/clients/nodejs.png";
import npm from "../images/clients/npm.png";
import php from "../images/clients/php.png";
import react from "../images/clients/react.png";
import vscode from "../images/clients/vscode.png";

const Technologies = () => {
  return (
    <section className="sec-5" id="tech">
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
  );
};

export default Technologies;
