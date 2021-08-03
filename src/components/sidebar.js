import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ active }) => {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-classname="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboard</li>
            <li>
              <a href="/admin-da-dashboard">
                <i className="metismenu-icon pe-7s-monitor"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i class="metismenu-icon pe-7s-diamond"></i>
                Elements
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                <li>
                  <a href="elements-buttons-standard.html">
                    <i class="metismenu-icon"></i>
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="elements-dropdowns.html">
                    <i class="metismenu-icon"></i>Dropdowns
                  </a>
                </li>
                <li>
                  <a href="elements-icons.html">
                    <i class="metismenu-icon"></i>Icons
                  </a>
                </li>
                <li>
                  <a href="elements-badges-labels.html">
                    <i class="metismenu-icon"></i>Badges
                  </a>
                </li>
                <li>
                  <a href="elements-cards.html">
                    <i class="metismenu-icon"></i>Cards
                  </a>
                </li>
                <li>
                  <a href="elements-list-group.html">
                    <i class="metismenu-icon"></i>List Groups
                  </a>
                </li>
                <li>
                  <a href="elements-navigation.html">
                    <i class="metismenu-icon"></i>Navigation Menus
                  </a>
                </li>
                <li>
                  <a href="elements-utilities.html">
                    <i class="metismenu-icon"></i>Utilities
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/admin-da-dashboard">
                <i className="metismenu-icon pe-7s-monitor"></i>
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
