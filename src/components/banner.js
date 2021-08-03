import React from "react";

const Banner = ({ icon, title }) => {
  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <i className={icon}> </i>
          </div>
          <div style={{ fontSize: 19 }}>
            {title}
            <div className="page-title-subheading">
              This system contains sensitive informtion and should be kept
              private.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
