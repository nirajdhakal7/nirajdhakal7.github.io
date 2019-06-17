import React from "react";
import { Link } from "react-router-dom";
const RouteLink = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <storng>ABMA</storng>
          <small>
            <sup>
              {"  "}
              <i className="fa fa-circle-o text-success" /> {"  "}
              Online Partner
            </sup>
            <sub> </sub>
          </small>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {props.prop.map((prop, key) => (
              <li className="nav-item" key={key}>
                <Link className="nav-link" to={prop.path}>
                  {prop.name}
                </Link>
              </li>
            ))}
          </ul>
          <span className="navbar-text">SomeThing Extras </span>
        </div>
      </nav>
    </>
  );
};

export default RouteLink;
