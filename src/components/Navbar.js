import logo from "../images/logo/logo.png";

import { Links } from "../links";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-margin">
          <a className="navbar-brand mr-auto" href="# ">
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
              {Links.map((link, index) => {
                return (
                  <li className="nav-item active" key={index}>
                    <a className="nav-link" href={link.href}>
                      {link.value}{" "}
                      {index === 0 ? (
                        <span className="sr-only">(current)</span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
