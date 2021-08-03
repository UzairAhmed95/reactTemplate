import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Banner from "../../components/banner";
import InfoBar from "../../components/infoBar";
import "../../assets/css/main.css";
import Card from "../../components/card";
import Input from "../../components/forms/input";

const CreateSale = () => {
  return (
    <>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <div className="app-main">
          <Sidebar active="DashboardForDA" />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <Banner
                title="Taxation Application - Create Sale"
                icon="pe-7s-monitor icon-gradient bg-mean-fruit"
              />
              <div className="row">
                <div className="col-lg-12">
                  <Card title="Customer Invoice">
                    <div className="row">
                      <div className="col-lg-4">
                        <Input
                          label="Customer"
                          placeholder="Enter Customer Name"
                        />
                      </div>
                      <div className="col-lg-4">
                        <Input
                          label="Customer"
                          placeholder="Enter Customer Name"
                        />
                      </div>
                      <div className="col-lg-4">
                        <Input
                          label="Customer"
                          placeholder="Enter Customer Name"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSale;
