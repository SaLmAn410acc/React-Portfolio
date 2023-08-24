import React from "react";
import profile_image from "../images/about/profile_image.jpg";
import Title from "./Title";

const AboutMe = () => {
  return (
    <section className="sec-2">
      <Title title="About Me" />

      <div className="container">
        <div className="row">
          <div className="col-md-6 about-me-left">
            <h3>
              My name is Muhammad Salman Khan. I hold a Bachelors degree in
              Computer Science. I am a passionate full-stack developer located
              in Pakistan.
            </h3>
            <p>
              I have a strong interest in crafting full-stack websites from the
              ground up. I have a strong interest in crafting responsive
              websites from the ground up. The array of technologies, tools, and
              languages I employ for my projects include HTML, CSS, Bootstrap,
              JavaScript, React Js, Node Js, Express Js, MongoDB, PHP, MySQL,
              Git and GitHub, Figma, as well as VS Code. <br />
              <br />I have eagerness to learn something new every day and I love
              to share my knowledge to my fellow developers. And I am looking
              forward to talk with you!
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
                <a
                  href="https://www.linkedin.com/in/msk-wd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/SaLmAn410acc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
