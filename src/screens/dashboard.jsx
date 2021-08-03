import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Banner from "../components/banner";
import InfoBar from "../components/infoBar";
import "../assets/css/main.css";
import Card from "../components/card";

const Dashboard = () => {
  return (
    <>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <div className="app-main">
          <Sidebar active="DashboardForDA" />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <Banner
                title="Drafting Authority - Dashboard"
                icon="pe-7s-monitor icon-gradient bg-mean-fruit"
              />

              {/* <div className="row">
                <div className="col-lg-3">
                  <InfoBar
                    variant="widget-numbers text-warning "
                    title="Pending"
                    subTitle="Secler Requests"
                    status={100}
                  />
                </div>
                <div className="col-lg-3">
                  <InfoBar
                    variant="widget-numbers text-success"
                    title="Approved"
                    subTitle="Secler Requests"
                    status={100}
                  />
                </div>
                <div className="col-lg-3">
                  <InfoBar
                    variant="widget-numbers text-danger"
                    title="Rejected"
                    subTitle="Secler Requests"
                    status={100}
                  />
                </div>
                <div className="col-lg-3">
                  <InfoBar
                    variant="widget-numbers text-secondary"
                    title="Rejected"
                    subTitle="Secler Requests"
                    status={100}
                  />
                </div>
              </div> */}
              {/* <div className="row">
                <div className="col-lg-12"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
