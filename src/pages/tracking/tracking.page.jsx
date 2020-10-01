import React from "react";
//import "./dashboard-card-collection.styles.scss";
import { createStructuredSelector } from "reselect";
import ImageList from "../../components/images-list/images.list";
import { selectAllPropertiesLength } from "../../redux/properties/properties.selectors";
import { connect } from "react-redux";
import DashboardInfoCard from "../../components/dashboard-info/dashboard-info.component";
//import { dateChecker } from "../../utils/date";

const TrackingPage = ({ cloudName, allProperties, uploadPreset }) => {
  console.log(this);
  const filterByUser = allProperties;

  console.log(filterByUser);
  return (
    <>
      <div className="row">
        <DashboardInfoCard title="Uploaded Ads" info={filterByUser} />
      </div>
      <ImageList />
      <div className="row"></div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  allProperties: selectAllPropertiesLength,
});

export default connect(mapStateToProps)(TrackingPage);
