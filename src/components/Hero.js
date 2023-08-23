import React from "react";

const Hero = () => {
  return (
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
  );
};

export default Hero;
