import React from "react";

import Title from "./Title";
import { CarouselData } from "../links";

const Technologies = () => {
  return (
    <section className="sec-5" id="tech">
      <Title title="Technologies I Worked with" />

      <div className="container my-5">
        <div className="row owl-carousel owl-theme">
          {CarouselData.map((image, index) => {
            console.log(image.name);
            return (
              <div className="item" key={index}>
                <img
                  src={image.name}
                  alt=""
                  className="img-fluid"
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
