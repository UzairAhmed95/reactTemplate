import React from "react";
import { Link } from "react-router-dom";

const InfoBar = ({ variant, title, subTitle, action, status, linkTo }) => {
  return (
    <a style={{ textDecoration: "none" }} className="card mb-3 widget-content">
      <div className="widget-content-outer">
        <div className="widget-content-wrapper">
          <div className="widget-content-left">
            <div className="widget-heading">{title}</div>
            <div className="widget-subheading">{subTitle}</div>
          </div>
          {action === true ? (
            <div className="widget-content-right">
              <div className={variant}></div>
            </div>
          ) : (
            <div className="widget-content-right">
              <div className={variant}>{status}</div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default InfoBar;
