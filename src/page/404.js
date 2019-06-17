import React from "react";
const Error404 = () => {
  const error1 = (
    <div className="app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You're lost.</h4>
              <p className="text-muted">
                The page you are looking for was not found.
              </p>
            </div>
            <div className="input-prepend input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-search" />
                </span>
              </div>
              <input
                className="form-control"
                id="prependedInput"
                size="16"
                type="text"
                placeholder="What are you looking for?"
              />
              <span className="input-group-append">
                <button className="btn btn-info" type="button">
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const error2 = (
    <>
      <p className="browserupgrade">
        You are using an
        <strong>outdated</strong> browser. Please
        <a href="http://browsehappy.com/">upgrade your browser</a>
        to improve your experience.
      </p>
      <div id="preloader">
        <div className="loader" />
      </div>
      <div className="error-area ptb--100 text-center">
        <div className="container">
          <div className="error-content">
            <h2>404</h2>
            <p>Ooops! Something went wrong .</p>
            <a href="index.html">Back to Dashboard</a>
          </div>
        </div>
      </div>
    </>
  );
  return <> {error1}</>;
};

export default Error404;
