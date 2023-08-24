import React from "react";

import Title from "./Title";
import { EducationBox } from "../links";

const Education = () => {
  return (
    <section className="sec-3" id="education">
      <Title title="Education" />
      <div className="container">
        <div className="row education-boxes">
          {EducationBox.map(({ year, field, place, city, index }) => {
            return (
              <div className="col-sm-4" key={index}>
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>{year}</h2>
                    <h3>{field}</h3>
                  </div>
                  {/* <!--/.experience-time--> */}
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">{place}</h4>
                      <h5>{city}</h5>
                    </div>
                    {/* <!--/.timeline-content--> */}
                  </div>
                  {/* <!--/.timeline--> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
