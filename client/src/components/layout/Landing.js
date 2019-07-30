import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">GLOBAL HUNCH</h1>
          <p className="medium">Get Paid To Travel</p>
          <p className="medium">Do Work You Love</p>
          <p className="lead">
            Global Hunch is the global fitness marketplace where hotels,
            resorts, wellness tour operators and fitness centres will be able to
            connect with qualified English-speaking fitness professionals around
            the globe. <br />
            Global Hunch empowers fitness professionals to find job
            opportunities in Vietnam
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
