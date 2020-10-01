import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import ErrorPage from "./pages/error/error-page.component";
import HostingComplete from "./pages/hosting-complete/hosting-complete.component";
import LoginPage from "./pages/login/login.component";
import ProvideSpace from "./pages/provide-space/provide-space.component";
import SearchPage from "./pages/search/search.component";
import SearchComboPage from "./pages/search-combo/search-combo.component";
import SignUp from "./pages/signup/signup.component";
import TrackingPage from "./pages/tracking/tracking.page.jsx";
import TermsPage from "./pages/terms/terms.component";
import SearchResultsPage from "./pages/search-results/search-results.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import ViewSpaceContainer from "./pages/view-space/view-space.container";
import { fetchPropertiesStart } from "./redux/properties/properties.actions";
import DashboardContainer from "./pages/dashboard/dashboard.container";
import EditSpaceContainer from "./pages/edit-property/edit-space.container";
import { selectIsPropertyUploaded } from "./redux/property-upload/property-upload.selectors";
import EditProfile from "./pages/edit-profile/edit-profile.component";
import PaymentContainer from "./pages/payment/payment.container";
import { CloudinaryContext } from "cloudinary-react";

const App = ({
  checkUserSession,
  currentUser,
  fetchPropertiesStart,
  isPropertyUploaded,
  cloudName,
  uploadPreset,
}) => {
  useEffect(() => {
    checkUserSession();
    fetchPropertiesStart();
  }, [checkUserSession, fetchPropertiesStart]);

  return (
    <CloudinaryContext cloudName={cloudName} uploadPreset={uploadPreset}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            path="/dashboard"
            render={() =>
              currentUser ? <DashboardContainer /> : <LoginPage />
            }
          />
          <Route path="/done" component={HostingComplete} />
          <Route
            path="/login"
            render={() =>
              currentUser ? <Redirect to="/dashboard" /> : <LoginPage />
            }
          />
          <Route
            path="/provide-space"
            render={() => (currentUser ? <ProvideSpace /> : <LoginPage />)}
          />
          <Route
            path="/uploading-space"
            render={() =>
              isPropertyUploaded ? (
                <Redirect to="/dashboard" />
              ) : (
                <ProvideSpace />
              )
            }
          />
          <Route
            path="/edit-space/:uid"
            render={(props) =>
              currentUser ? <EditSpaceContainer {...props} /> : <LoginPage />
            }
          />
          <Route path="/search" component={SearchPage} />
          <Route path="/search-results" component={SearchResultsPage} />
          <Route path="/search.php" component={SearchComboPage} />
          <Route
            exact
            path="/signup"
            render={() =>
              currentUser ? <Redirect to="/dashboard" /> : <SignUp />
            }
          />
          <Route path="/terms" component={TermsPage} />
          <Route path="/tracking">
            <TrackingPage cloudName={cloudName} uploadPreset={uploadPreset} />
          </Route>
          <Route path="/properties/:uid" component={ViewSpaceContainer} />
          <Route
            path="/edit-profile/:id"
            render={() => (currentUser ? <EditProfile /> : <LoginPage />)}
          />
          <Route
            path="/payment/:id"
            render={(props) =>
              currentUser ? <PaymentContainer {...props} /> : <LoginPage />
            }
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </CloudinaryContext>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isPropertyUploaded: selectIsPropertyUploaded,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchPropertiesStart: () => dispatch(fetchPropertiesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
