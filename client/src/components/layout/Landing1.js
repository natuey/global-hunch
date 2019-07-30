// import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const Landing = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <section className="landing">
//       <div className="dark-overlay">
//         <div className="landing-inner">
//           <h1 className="x-large">Global Hunch</h1>
//           <p className="lead">
//             Global Hunch empowers fitness professionals to find job
//             opportunities in Vietnam
//           </p>
//           <div className="buttons">
//             <Link to="/register" className="btn btn-primary">
//               Sign Up
//             </Link>
//             <Link to="/login" className="btn btn-light">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps)(Landing);

import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Global Hunch</h1>
          <p class="lead">
            Global Hunch empowers fitness professionals to find job
            opportunities in Vietnam
          </p>
          <div class="buttons">
            <Link to="/register" class="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" class="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
