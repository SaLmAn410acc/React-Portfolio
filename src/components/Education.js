import React from "react";

const Education = () => {
  return (
    <section className="sec-3" id="education">
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
  );
};

export default Education;
