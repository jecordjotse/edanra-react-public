import React from "react";
import { connect } from "react-redux";
import "./navbar.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectLoadingUser,
} from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const Navbar = ({ currentUser, signOutStart, loader }) => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
        className="container-fluid"
      >
        <div className="navbar-translate">
          <Link className="navbar-brand" to="/">
            <img
              src={require("../../assets/img/edanra.png")}
              alt=""
              className="img-fluid logo"
            />
            <span
              style={{
                color: "#004D40",
                fontSize: "0.9em",
                fontWeight: "bold",
              }}
            >
              {" "}
              edanra
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-toggler">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                data-toggle="collapse"
                exact={true}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item navbar-toggler">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                data-toggle="collapse"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item navbar-toggler">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                data-toggle="collapse"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item navbar-toggler">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                data-toggle="collapse"
                to="/tracking"
              >
                Tracking
              </NavLink>
            </li>
            {currentUser ? (
              <li className="nav-item navbar-toggler">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  data-toggle="collapse"
                  to="/provide-space"
                >
                  Provide space
                </NavLink>
              </li>
            ) : (
              <></>
            )}
            <li className="nav-item navbar-toggler">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                data-toggle="collapse"
                to="/search"
              >
                Find Space
              </NavLink>
            </li>
            {currentUser ? (
              <li className="nav-item navbar-toggler">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  data-toggle="collapse"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <></>
            )}
            <li className="nav-item navbar-toggler">
              {currentUser ? (
                <Link
                  className="nav-link"
                  onClick={signOutStart}
                  data-toggle="collapse"
                  to="/login"
                >
                  {loader ? <LoadingSpinner /> : <>Sign Out</>}
                </Link>
              ) : (
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  data-toggle="collapse"
                  to="/login"
                >
                  Sign In
                </NavLink>
              )}
            </li>
            {currentUser ? (
              <></>
            ) : (
              <li className="nav-item navbar-toggler">
                <NavLink
                  className="nav-link get-started-link"
                  data-toggle="collapse"
                  to="/signup"
                >
                  Host your property
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loader: selectLoadingUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
